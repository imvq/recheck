import { memo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as constants from 'commons/utils/constants';
import * as store from 'store';
import { AppState, AppDispatch } from 'store';

import { ISearchedProfile } from 'commons/types';
import { jumpBack, jumpTo } from 'commons/utils/misc';
import { apiClient } from 'commons/utils/services';

import AuthPopupManager from 'components/shared/AuthPopupManager';
import ProfileHead from 'components/shared/ProfileHead';

import CommentBoxSimple from './CommentBoxSimple';
import ComponentBoxWithMark from './CommentBoxWithMark';
import JobDatesBox from './JobDatesBox';

import * as misc from './misc';
import * as styled from './styled';

/**
 * Page in charge of adding a review.
 */
function ReviewPage() {
  const { targetShareableId } = useParams<{ targetShareableId: string }>();

  const [observedUser, setObservedUser] = useState<ISearchedProfile>();
  const [step, setStep] = useState(0);

  const isPageLocked = useSelector((state: AppState) => state.misc.isPageLocked);
  const isCurrentUserConfirmed = useSelector((state: AppState) => state.profile.isConfirmed);
  const privateToken = useSelector((state: AppState) => state.profile.privateToken);
  const company = useSelector((state: AppState) => state.profile.company);
  const currentPosition = useSelector((state: AppState) => state.profile.currentPosition);
  const email = useSelector((state: AppState) => state.profile.email);
  const requestedShareableId = useSelector((state: AppState) => state.misc.requestedShareableId);
  const reviewData = useSelector((state: AppState) => store.getUntargetedCreatedReview(state));

  const dispatch = useDispatch<AppDispatch>();

  function proceed(comment: string, mark: number | null = null) {
    dispatch(store.pushAnswer(comment, mark));
    setStep(step + 1);
  }

  function toPrevious() {
    dispatch(store.popAnswer());
    setStep(step - 1);
  }

  function finalize(comment: string, mark: number | null = null) {
    dispatch(store.pushAnswer(comment, mark));
    // First we have to add the last answer to our review data.
    const extendedReviewData = {
      questions: reviewData.questions,
      comments: [...reviewData.comments, comment],
      marks: [...reviewData.marks, mark]
    };

    if (isCurrentUserConfirmed) {
      dispatch(store.setCurrentUserRole('candidate'));
      dispatch(store.createReview(
        privateToken!,
        company!.name,
        currentPosition!,
        email!,
        targetShareableId,
        extendedReviewData,
        () => misc.postRedirect(requestedShareableId)
      ));
    } else {
      const serialziedReview = { targetShareableId, reviewData };
      misc.saveReviewLocally(JSON.stringify(serialziedReview));

      dispatch(store.setIsLoginPopupVisible(true));
    }
  }

  // We must check if there is a user with provided shareable ID.
  // If not, then we must redirect to 404 page since there's no one to be reviewed.
  useEffect(() => {
    apiClient.searchUserByShareableId(targetShareableId)
      .then(searchResult => {
        setObservedUser(searchResult.data);

        dispatch(store.setCurrentReviewTargetShareableId(searchResult.data.shareableId));
      })
      .catch(() => {
        dispatch(store.setIsPageLocked(false));

        jumpTo('/404');
      });
  }, []);

  // Set questions set depending on user's choice (basic questions set is the default one).
  useEffect(() => {
    dispatch(store.setQuestions(constants.REVIEW_QESTIONS_BASIC));
  }, []);

  // There are some conditions to review someone:
  // 1) the reviewer must be registered and confirmed;
  // 2) if the reviewer is registered and confirmed
  //    2.1) reviewer and reviewed person must be connected to each other;
  //    2.2) the review must not exist yet;
  // 3) if the reviewer is not signed in, authorization can be deferred
  //    till the review is saved.
  useEffect(() => {
    if (isCurrentUserConfirmed === null) {
      return;
    }

    if (!isCurrentUserConfirmed) {
      dispatch(store.setIsRedirectHomePending(true));
      dispatch(store.setIsPageLocked(false));

      return;
    }

    apiClient.checkIfUserCanLeaveReview(privateToken!, targetShareableId)
      .then(checkData => {
        if (checkData.data.success) {
          dispatch(store.setIsPageLocked(false));

          return;
        }

        jumpTo('/404');
      })
      .catch(() => jumpTo('/404'));
  }, [isCurrentUserConfirmed]);

  const boxesBasic = [
    <CommentBoxSimple key={1} pageLabel='1 / 6' onStepForward={proceed} onStepBack={jumpBack}>
      {constants.REVIEW_QESTIONS_BASIC[0]}
    </CommentBoxSimple>,

    <CommentBoxSimple key={2} pageLabel='2 / 6' onStepForward={proceed} onStepBack={toPrevious}>
      {constants.REVIEW_QESTIONS_BASIC[1]}
    </CommentBoxSimple>,

    <JobDatesBox key={3} pageLabel='3 / 6' onStepForward={proceed} onStepBack={toPrevious}>
      {constants.REVIEW_QESTIONS_BASIC[2]}
    </JobDatesBox>,

    <CommentBoxSimple key={4} pageLabel='4 / 6' onStepForward={proceed} onStepBack={toPrevious}>
      {constants.REVIEW_QESTIONS_BASIC[3]}
    </CommentBoxSimple>,

    <ComponentBoxWithMark
      key={5}
      pageLabel='5 / 6'
      onStepForward={proceed}
      onStepBack={toPrevious}
      labels={['???? ????????????????????', '????????????????????', '?????????????????? ????????????????']}
    >
      {constants.REVIEW_QESTIONS_BASIC[4]}
    </ComponentBoxWithMark>,

    <CommentBoxSimple key={6} pageLabel='6 / 6' onStepForward={finalize} onStepBack={toPrevious}>
      {constants.REVIEW_QESTIONS_BASIC[5]}
    </CommentBoxSimple>,
  ];

  const GuardedContent = (
    <styled.Wrapper>
      <styled.AdaptedHeader />
      <styled.ContentWrapper>
        {observedUser && (
          <styled.ProfileHeadWrapper>
            <ProfileHead profileInfo={observedUser} isSolid />
          </styled.ProfileHeadWrapper>
        )}

        {boxesBasic[step]}
      </styled.ContentWrapper>
      <styled.AdaptedFooter />

      <AuthPopupManager />
    </styled.Wrapper>
  );

  return isPageLocked ? null : GuardedContent;
}

export default memo(ReviewPage);
