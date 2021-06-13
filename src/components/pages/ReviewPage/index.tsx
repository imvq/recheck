import { useState } from 'react';
import { connect } from 'react-redux';

import { AppState, createReview } from 'store';
import { IProps, IStateProps, IDispatchProps } from './types';
import BoxStepInitial from './BoxStepInitial';

import CommentBoxSimple from './CommentBoxSimple';
import * as boxSimpleMapping from './CommentBoxSimple/mapping';

import BoxStepE from './BoxStepE';
import BoxStepF from './BoxStepF';
import BoxStepG from './BoxStepG';
import BoxStepH from './BoxStepH';
import BoxStepI from './BoxStepI';
import BoxStepJ from './BoxStepJ';
import BoxStepK from './BoxStepK';
import { Wrapper, AdaptedHeader, AdaptedFooter, ContentWrapper } from './styled';

const mapSateToProps = (store: AppState): IStateProps => ({
  currentProfileInfo: store.profile.currentProfileInfo,
  reviewData: { ...store.reviews }
});

const mapDispatchToProps: IDispatchProps = {
  createReview
};

const BoxStepA = CommentBoxSimple(
  boxSimpleMapping.mapStepAStateToProps,
  boxSimpleMapping.mapStepADispatchToProps
);

const BoxStepB = CommentBoxSimple(
  boxSimpleMapping.mapStepBStateToProps,
  boxSimpleMapping.mapStepBDispatchToProps
);

const BoxStepC = CommentBoxSimple(
  boxSimpleMapping.mapStepCStateToProps,
  boxSimpleMapping.mapStepCDispatchToProps
);

const BoxStepD = CommentBoxSimple(
  boxSimpleMapping.mapStepDStateToProps,
  boxSimpleMapping.mapStepDDispatchToProps
);

/**
 * Page in charge of adding a review.
 */
const ReviewPage = (props: IProps) => {
  const [step, setStep] = useState(0);

  const proceed = () => setStep(step + 1);
  const comeback = () => setStep(step - 1);
  const finalize = () => props.createReview({
    authorId: props.currentProfileInfo.currentId,
    ...props.reviewData
  });

  const boxes = [
    <BoxStepInitial onNextStep={proceed} />,
    <BoxStepA page={1} onNextStep={proceed} onBack={comeback} />,
    <BoxStepB page={2} onNextStep={proceed} onBack={comeback} />,
    <BoxStepC page={3} onNextStep={proceed} onBack={comeback} />,
    <BoxStepD page={4} onNextStep={proceed} onBack={comeback} />,
    <BoxStepE onNextStep={proceed} onBack={comeback} />,
    <BoxStepF onNextStep={proceed} onBack={comeback} />,
    <BoxStepG onNextStep={proceed} onBack={comeback} />,
    <BoxStepH onNextStep={proceed} onBack={comeback} />,
    <BoxStepI onNextStep={proceed} onBack={comeback} />,
    <BoxStepJ onNextStep={proceed} onBack={comeback} />,
    <BoxStepK onNextStep={finalize} onBack={comeback} />
  ];

  return (
    <Wrapper>
      <AdaptedHeader />
      <ContentWrapper>
        {boxes[step]}
      </ContentWrapper>
      <AdaptedFooter />
    </Wrapper>
  );
};

export default connect(mapSateToProps, mapDispatchToProps)(ReviewPage);
