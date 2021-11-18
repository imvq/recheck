import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ISearchedProfile } from 'commons/types';
import { jumpBack, jumpTo } from 'commons/utils/misc';
import { apiClient, cookieManager } from 'commons/utils/services';
import {
  AppState,
  setIsLoginPopupVisible,
  setCurrentMainToolbarEntry,
  setCurrentReviewTargetShareableId,
  setPageLocked,
  setPageUnlocked
} from 'store';
import { getUntargetedCreatedReview } from 'store/selectors';
import { createReview } from 'store/thunks';

import AuthPopupManager from 'components/shared/AuthPopupManager';
import ProfileHead from 'components/shared/ProfileHead';

import * as boxSimpleMapping from './CommentBoxSimple/mapping';
import * as boxWithMarkLabels from './CommentBoxWithMark/labels';
import * as boxWithMarkMapping from './CommentBoxWithMark/mapping';

import CommentBoxSimple from './CommentBoxSimple';
import ComponentBoxWithMark from './CommentBoxWithMark';

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
  setIsLoginPopupVisible,
  setCurrentMainToolbarEntry,
  setCurrentReviewTargetShareableId,
  lockPage: setPageLocked,
  unlockPage: setPageUnlocked
};

const BoxStepA = CommentBoxSimple(
  boxSimpleMapping.mapStepAStateToProps,
  boxSimpleMapping.mapStepADispatchToProps
);

const BoxStepB = CommentBoxSimple(
  boxSimpleMapping.mapStepBStateToProps,
  boxSimpleMapping.mapStepBDispatchToProps
);

const BoxStepC = ComponentBoxWithMark(
  boxWithMarkMapping.mapStepCStateToProps,
  boxWithMarkMapping.mapStepCDispatchToProps
);

function postRedirect(requestedUserShareableId: string | null) {
  if (requestedUserShareableId) {
    jumpTo('/profile/observe/', requestedUserShareableId);
    return;
  }

  jumpTo('/profile');
}

function saveReviewToCookies(review: any) {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  cookieManager.set('preparedReview', review, { expires });
}

/**
 * Page in charge of adding a review.
 */
function ReviewPage(props: types.IProps) {
  const { targetShareableId } = useParams<{ targetShareableId: string }>();

  const [observedUser, setObservedUser] = useState<ISearchedProfile>();
  const [step, setStep] = useState(0);

  const proceed = () => setStep(step + 1);

  const comeback = () => setStep(step - 1);

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

  function finalize() {
    // If an uthorized user has not been redirected yet (with PageAccessGuard),
    // that means it is registered and confirmed,
    // therefore, the conditions of the second scenario (look at the first useEffect)
    // are satisfied.
    if (props.isAuthorized) {
      props.createReview(
        props.privateToken as string,
        targetShareableId,
        props.reviewData,
        () => postRedirect(props.requestedUserShareableId)
      );
    } else {
      saveReviewToCookies(props.reviewData);
      props.setIsLoginPopupVisible(true);
    }
  }

  const boxes = [
    <BoxStepA page={1} onNextStep={proceed} onBack={jumpBack}>
      Опишите какие задачи и обязанности были у кандидата. Как он с ними справился?
    </BoxStepA>,
    <BoxStepB page={2} onNextStep={proceed} onBack={comeback}>
      Опишите сильные стороны кандидата в работе
    </BoxStepB>,
    <BoxStepC page={3} onNextStep={finalize} onBack={comeback} labels={boxWithMarkLabels.stepC}>
      Насколько вероятно, что вы порекомендуете кандидата?
    </BoxStepC>
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

export default connect(mapSateToProps, mapDispatchToProps)(ReviewPage);
