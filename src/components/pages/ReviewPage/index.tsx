import { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ISearchedProfile } from 'commons/types';
import { jumpBack, jumpTo } from 'commons/utils/misc';
import { apiClient } from 'commons/utils/services';
import {
  AppState,
  pushAnswer,
  popAnswer,
  setIsLoginPopupVisible,
  setCurrentReviewTargetShareableId,
  setPageLocked,
  setPageUnlocked
} from 'store';
import { getUntargetedCreatedReview } from 'store/selectors';
import { createReview } from 'store/thunks';

import AuthPopupManager from 'components/shared/AuthPopupManager';
import ProfileHead from 'components/shared/ProfileHead';

import CommentBoxSimple from './CommentBoxSimple';
import ComponentBoxWithMark from './CommentBoxWithMark';

import * as misc from './misc';
import * as types from './types';
import * as styled from './styled';

const mapSateToProps = (store: AppState): types.IStateProps => ({
  isAuthorized: store.profile.isAuthorized,
  isPageLocked: store.interaction.isPageLocked,
  privateToken: store.profile.privateToken,
  requestedUserShareableId: store.interaction.requestedUserShareableId,
  reviewData: getUntargetedCreatedReview(store)
});

const mapDispatchToProps: types.IDispatchProps = {
  createReview,
  pushAnswer,
  popAnswer,
  setIsLoginPopupVisible,
  setCurrentReviewTargetShareableId,
  lockPage: setPageLocked,
  unlockPage: setPageUnlocked
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

    // If an uthorized user has not been redirected yet (with PageAccessGuard),
    // that means it is registered and confirmed,
    // therefore, the conditions of the second scenario (look at the first useEffect)
    // are satisfied.
    if (props.isAuthorized) {
      props.createReview(
        props.privateToken as string,
        targetShareableId,
        props.reviewData,
        () => misc.postRedirect(props.requestedUserShareableId)
      );
    } else {
      misc.saveReviewLocally(JSON.stringify(props.reviewData));
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
        jumpTo('/404');
        props.unlockPage();
      });
  }, []);

  // There are some conditions to review someone:
  // 1) the reviewer must be registered and confirmed;
  // 2) if the reviewer is registered and confirmed
  //    2.1) reviewer and reviewed person must be connected to each other;
  //    2.2) the review must not exist yet;
  // 3) if the reviewer is not signed in, authorization can be deferred
  //    till the review is saved.
  useEffect(() => {
    if (props.isAuthorized === null) {
      // eslint-disable-next-line
      return;
    }

    if (!props.isAuthorized) {
      props.unlockPage();
    }

    // TODO: check if the target is connected.
  }, [props.isAuthorized]);

  const boxes = [
    <CommentBoxSimple key={1} pageLabel='1 / 3' onStepForward={proceed} onStepBack={jumpBack}>
      Опишите какие задачи и обязанности были у кандидата. Как он с ними справился?
    </CommentBoxSimple>,

    <CommentBoxSimple key={2} pageLabel='2 / 3' onStepForward={proceed} onStepBack={comeback}>
      Опишите сильные стороны кандидата в работе
    </CommentBoxSimple>,

    <ComponentBoxWithMark
      key={3}
      pageLabel='3 / 3'
      onStepForward={finalize}
      onStepBack={comeback}
      labels={['Не рекомендую', 'Рекомендую', 'Превзошёл ожидания']}
    >
      Насколько вероятно, что вы порекомендуете кандидата?
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

        {boxes[step]}
      </styled.ContentWrapper>
      <styled.AdaptedFooter />

      <AuthPopupManager />
    </styled.Wrapper>
  );

  return props.isPageLocked ? null : GuardedContent;
}

export default connect(mapSateToProps, mapDispatchToProps)(memo(ReviewPage));
