import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Api from 'utils/api';
import controlledHistory from 'utils/routing';
import { ISearchProfileInfo } from 'utils/typing/general';
import { MainToolbarEntry } from 'utils/enums';
import {
  AppState,
  createReview,
  setCurrentMainToolbarEntry,
  setPageUnlocked,
  setTargetShareableId
} from 'store';
import { mapProfileInfoToIAppProfileInfoSlice } from 'utils/functions';
import ProfileHead from 'components/shared/ProfileHead';

import CommentBoxSimple from './CommentBoxSimple';
import * as boxSimpleMapping from './CommentBoxSimple/mapping';

import ComponentBoxWithMark from './CommentBoxWithMark';
import * as boxWithMarkMapping from './CommentBoxWithMark/mapping';
import * as boxWithMarkLabels from './CommentBoxWithMark/labels';

import * as types from './types';
import * as styled from './styled';

const mapSateToProps = (store: AppState): types.IStateProps => ({
  currentProfileInfo: store.profile.currentProfileInfo,
  requestedUserShareableId: store.interaction.requestedUserShareableId,
  reviewData: { ...store.reviews }
});

const mapDispatchToProps: types.IDispatchProps = {
  createReview,
  setCurrentMainToolbarEntry,
  setTargetShareableId,
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

/**
 * Page in charge of adding a review.
 */
const ReviewPage = (props: types.IProps) => {
  const { targetShareableId } = useParams<{ targetShareableId: string }>();
  const [observedUser, setObservedUser] = useState<ISearchProfileInfo>();
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Do nothing until we get our user's profile data.
    if (props.currentProfileInfo.currentId === '') {
      return;
    }

    // Check if the target exists and is connected to the asker.
    // If not then forward to the profile page.
    if (targetShareableId) {
      props.setTargetShareableId(targetShareableId);

      Api.checkIsTargetConnected({
        askerProfileId: props.currentProfileInfo.currentId,
        targetShareableId
      })
        .then(connectionData => {
          if (!connectionData.data.success) {
            controlledHistory.push('/profile');
          }

          Api.searchUserByShareableId(targetShareableId)
            .then(searchResult => setObservedUser(searchResult.data.result))
            .catch(() => controlledHistory.push('/404'))
            .finally(() => props.unlockPage());
        })
        .catch(() => controlledHistory.push('/profile'));
    } else {
      props.unlockPage();
    }
  }, [props.currentProfileInfo]);

  const proceed = () => setStep(step + 1);

  const comeback = () => setStep(step - 1);

  const finalize = () => {
    props.createReview({
      authorId: props.currentProfileInfo.currentId,
      ...props.reviewData
    });

    Api.makeUserAvailable({
      askerProfileId: props.currentProfileInfo.currentId,
      // @ts-ignore: requestedUserShareableId is guaranteed to be a valid string here.
      targetShareableId: props.requestedUserShareableId
    }).then(() => {
      controlledHistory.push(`/profile/observed/${props.requestedUserShareableId}`);
    })
      .catch(() => controlledHistory.push('/profile'));
  };

  const boxes = [
    <BoxStepA page={1} onNextStep={proceed} onBack={comeback}>
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
          <ProfileHead noButtons profileInfo={mapProfileInfoToIAppProfileInfoSlice(observedUser)} />
        </styled.ProfileHeadWrapper>
        )}

        {boxes[step]}
      </styled.ContentWrapper>
      <styled.AdaptedFooter />
    </styled.Wrapper>
  );
};

export default connect(mapSateToProps, mapDispatchToProps)(ReviewPage);
