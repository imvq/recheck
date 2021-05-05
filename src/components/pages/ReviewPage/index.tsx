import { useState } from 'react';
import { connect } from 'react-redux';

import { AppState, createReview } from 'store';
import { IProps, IStateProps, IDispatchProps } from './types';
import BoxStepInitial from './BoxStepInitial';
import BoxStepA from './BoxStepA';
import BoxStepB from './BoxStepB';
import BoxStepC from './BoxStepC';
import BoxStepD from './BoxStepD';
import BoxStepE from './BoxStepE';
import BoxStepF from './BoxStepF';
import BoxStepG from './BoxStepG';
import BoxStepH from './BoxStepH';
import BoxStepI from './BoxStepI';
import BoxStepJ from './BoxStepJ';
import BoxStepK from './BoxStepK';
import { Wrapper, AdaptedHeader, AdaptedFooter, ContentWrapper } from './styled';

const mapSateToProps = (store: AppState): IStateProps => ({
  reviewData: {
    firstName: store.reviews.firstName,
    lastName: store.reviews.lastName,
    company: store.reviews.company,
    bounds: store.reviews.bounds,
    tasks: store.reviews.tasks,
    strengths: store.reviews.strengths,
    improvements: store.reviews.improvements,
    results: store.reviews.results,
    levelMark: store.reviews.levelMark,
    levelComment: store.reviews.levelComment,
    activityMark: store.reviews.activityMark,
    activityComment: store.reviews.activityComment,
    ownHireOpinionMark: store.reviews.ownHireOpinionMark,
    ownHireOpinionComment: store.reviews.ownHireOpinionComment,
    qualityMark: store.reviews.qualityMark,
    qualityComment: store.reviews.qualityComment,
    leadershipMark: store.reviews.leadershipMark,
    leadershipComment: store.reviews.leadershipComment,
    adviceComment: store.reviews.adviceComment,
    recommenderLink1: store.reviews.recommenderLink1,
    recommenderLink2: store.reviews.recommenderLink2,
    recommenderLink3: store.reviews.recommenderLink3,
  }
});

const mapDispatchToProps: IDispatchProps = {
  createReview
};

/**
 * Page in charge of adding a review.
 */
const ReviewPage = (props: IProps) => {
  const [step, setStep] = useState(0);

  const proceed = () => setStep(step + 1);
  const comeback = () => setStep(step - 1);
  const finalize = () => props.createReview(props.reviewData);

  const boxes = [
    <BoxStepInitial onNextStep={proceed} />,
    <BoxStepA onNextStep={proceed} onBack={comeback} />,
    <BoxStepB onNextStep={proceed} onBack={comeback} />,
    <BoxStepC onNextStep={proceed} onBack={comeback} />,
    <BoxStepD onNextStep={proceed} onBack={comeback} />,
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
