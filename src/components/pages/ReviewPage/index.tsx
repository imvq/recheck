import { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as constants from 'commons/utils/constants';
import * as store from 'store';

import { ISearchedProfile } from 'commons/types';
import { jumpBack, jumpTo } from 'commons/utils/misc';
import { apiClient } from 'commons/utils/services';

import AuthPopupManager from 'components/shared/AuthPopupManager';
import ProfileHead from 'components/shared/ProfileHead';

import CommentBoxSimple from './CommentBoxSimple';
import ComponentBoxWithMark from './CommentBoxWithMark';

import * as misc from './misc';
import * as types from './types';
import * as styled from './styled';

const mapSateToProps = (state: store.AppState): types.IStateProps => ({
  isAuthenticated: store.getIsUserAuthenticated(state),
  isPageLocked: store.getIsPageLocked(state),
  privateToken: store.getCurrentPrivateToken(state),
  requestedUserShareableId: store.getRequestedUserShareableId(state),
  reviewData: store.getUntargetedCreatedReview(state)
});

const mapDispatchToProps: types.IDispatchProps = {
  createReview: store.createReview,
  setQuestions: store.setQuestions,
  pushAnswer: store.pushAnswer,
  popAnswer: store.popAnswer,
  setIsRedirectHomePending: store.setIsRedirectHomePending,
  setIsLoginPopupVisible: store.setIsLoginPopupVisible,
  setCurrentReviewTargetShareableId: store.setCurrentReviewTargetShareableId,
  setIsPageLocked: store.setIsPageLocked
};

/**
 * Page in charge of adding a review.
 */
function ReviewPage(props: types.IProps) {
  const { targetShareableId } = useParams<{ targetShareableId: string }>();

  const [observedUser, setObservedUser] = useState<ISearchedProfile>();
  const [step, setStep] = useState(0);

  function proceed(comment: string, mark: number | null = null) {
    props.pushAnswer(comment, mark);
    setStep(step + 1);
  }

  function comeback() {
    props.popAnswer();
    setStep(step - 1);
  }

  function finalize(comment: string, mark: number | null = null) {
    props.pushAnswer(comment, mark);
    // First we have to add the last answer to our review data.
    const reviewData = {
      questions: props.reviewData.questions,
      comments: [...props.reviewData.comments, comment],
      marks: [...props.reviewData.marks, mark]
    };

    // If an authorized user has not been redirected yet (with PageAccessGuard),
    // that means it is registered and confirmed,
    // therefore, the conditions of the second scenario (look at the second useEffect)
    // are satisfied.
    if (props.isAuthenticated) {
      props.createReview(
        props.privateToken as string,
        targetShareableId,
        reviewData,
        () => misc.postRedirect(props.requestedUserShareableId)
      );
    } else {
      const serialziedReview = { targetShareableId, reviewData: props.reviewData };
      misc.saveReviewLocally(JSON.stringify(serialziedReview));
      props.setIsLoginPopupVisible(true);
    }
  }

  // We must check if there is a user with provided shareable ID.
  // If not, then we must redirect to 404 page since there's no one to review.
  useEffect(() => {
    apiClient.searchUserByShareableId(targetShareableId)
      .then(searchResult => {
        setObservedUser(searchResult.data);
        props.setCurrentReviewTargetShareableId(searchResult.data.shareableId);
      })
      .catch(() => {
        props.setIsPageLocked(false);
        jumpTo('/404');
      });
  }, []);

  // Set questions set depending on user's choice (basic questions set is the default one).
  useEffect(() => {
    props.setQuestions(constants.REVIEW_QESTIONS_BASIC);
  }, []);

  // There are some conditions to review someone:
  // 1) the reviewer must be registered and confirmed;
  // 2) if the reviewer is registered and confirmed
  //    2.1) reviewer and reviewed person must be connected to each other;
  //    2.2) the review must not exist yet;
  // 3) if the reviewer is not signed in, authorization can be deferred
  //    till the review is saved.
  useEffect(() => {
    if (props.isAuthenticated === null) {
      return;
    }

    if (!props.isAuthenticated) {
      props.setIsRedirectHomePending(true);
      props.setIsPageLocked(false);
      return;
    }

    apiClient.checkIfUserCanLeaveReview(props.privateToken as string, targetShareableId)
      .then(checkData => {
        if (checkData.data.success) {
          props.setIsPageLocked(false);
          return;
        }

        jumpTo('/404');
      })
      .catch(() => jumpTo('/404'));
  }, [props.isAuthenticated]);

  const boxesBasic = [
    <CommentBoxSimple key={1} pageLabel='1 / 3' onStepForward={proceed} onStepBack={jumpBack}>
      {constants.REVIEW_QESTIONS_BASIC[0]}
    </CommentBoxSimple>,

    <CommentBoxSimple key={2} pageLabel='2 / 3' onStepForward={proceed} onStepBack={comeback}>
      {constants.REVIEW_QESTIONS_BASIC[1]}
    </CommentBoxSimple>,

    <ComponentBoxWithMark
      key={3}
      pageLabel='3 / 3'
      onStepForward={finalize}
      onStepBack={comeback}
      labels={['Не рекомендую', 'Рекомендую', 'Превзошёл ожидания']}
    >
      {constants.REVIEW_QESTIONS_BASIC[2]}
    </ComponentBoxWithMark>
  ];

  const GuardedContent = (
    <styled.Wrapper>
      <styled.AdaptedHeader />
      <styled.ContentWrapper>
        {observedUser && (
          <styled.ProfileHeadWrapper>
            <ProfileHead profileInfo={observedUser} isSolid noButtons />
          </styled.ProfileHeadWrapper>
        )}

        {boxesBasic[step]}
      </styled.ContentWrapper>
      <styled.AdaptedFooter />

      <AuthPopupManager />
    </styled.Wrapper>
  );

  return props.isPageLocked ? null : GuardedContent;
}

export default connect(mapSateToProps, mapDispatchToProps)(memo(ReviewPage));
