import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ISearchProfileInfo } from 'commons/types/general';
import { jumpBack, jumpTo, mapProfileInfoToIAppProfileInfoSlice } from 'commons/utils/misc';
import { apiClient, cookieManager } from 'commons/utils/services';
import {
  AppState,
  createReview,
  setIsLoginPopupVisible,
  setCurrentMainToolbarEntry,
  setPageLocked,
  setPageUnlocked,
  setTargetShareableId
} from 'store';

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
  isAuthorized: store.auth.isAuthorized,
  currentProfileInfo: store.profile.currentProfileInfo,
  requestedUserShareableId: store.interaction.requestedUserShareableId,
  reviewData: { ...store.reviews }
});

const mapDispatchToProps: types.IDispatchProps = {
  createReview,
  setIsLoginPopupVisible,
  setCurrentMainToolbarEntry,
  setTargetShareableId,
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

const jumpToProfile = () => jumpTo('/profile');

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

  const [observedUser, setObservedUser] = useState<ISearchProfileInfo>();
  const [step, setStep] = useState(0);

  const proceed = () => setStep(step + 1);

  const comeback = () => setStep(step - 1);

  useEffect(() => {
    apiClient.searchUserByShareableId(targetShareableId)
      .then(searchResult => {
        setObservedUser(searchResult.data.result);
        props.setTargetShareableId(searchResult.data.result.shareableId);
      })
      .catch(() => jumpTo('/404'))
      .finally(() => props.unlockPage());
  }, []);

  useEffect(() => {
    // Do nothing until we get our user's profile data.
    if (!props.isAuthorized) {
      return;
    }

    props.lockPage();

    apiClient.checkIsTargetConnected({
      askerProfileId: props.currentProfileInfo.currentId,
      targetShareableId
    })
      .then(connectionData => {
        if (!connectionData.data.success) {
          jumpTo('/404');
        }
      })
      .catch(() => jumpTo('/404'));
  }, []);

  function finalize() {
    if (props.isAuthorized) {
      props.createReview({ authorId: props.currentProfileInfo.currentId, ...props.reviewData });

      if (props.requestedUserShareableId) {
        apiClient.makeUserAvailable({
          askerProfileId: props.currentProfileInfo.currentId,
          targetShareableId: props.requestedUserShareableId
        }).then(() => {
          jumpTo('/profile/observe/', props.requestedUserShareableId as string);
        }).catch(jumpToProfile);

        return;
      }

      jumpToProfile();
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

  return (
    <styled.Wrapper>
      <styled.AdaptedHeader />
      <styled.ContentWrapper>
        {observedUser && (
        <styled.ProfileHeadWrapper>
          <ProfileHead
            profileInfo={mapProfileInfoToIAppProfileInfoSlice(observedUser)}
            isSolid
            noButtons
          />
        </styled.ProfileHeadWrapper>
        )}

        {boxes[step]}
      </styled.ContentWrapper>
      <styled.AdaptedFooter />

      <AuthPopupManager />
    </styled.Wrapper>
  );
}

export default connect(mapSateToProps, mapDispatchToProps)(ReviewPage);
