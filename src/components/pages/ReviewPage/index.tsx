import { useState } from 'react';

import ReviewStage2 from 'assets/images/pages/ReviewPage/ReviewStage2.png';
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
import {
  Wrapper, AdaptedHeader, AdaptedFooter,
  ContentWrapper,
  StageBreadcrumpWrapper, StageBreadcrumpImage
} from './styled';

/**
 * Page in charge of adding a review.
 */
export default () => {
  const [step, setStep] = useState(0);

  const proceed = () => setStep(step + 1);
  const comeback = () => setStep(step - 1);

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
    <div>End</div>
  ];

  return (
    <Wrapper>
      <AdaptedHeader />
      <ContentWrapper>
        <StageBreadcrumpWrapper>
          <StageBreadcrumpImage src={ReviewStage2} draggable='false' />
        </StageBreadcrumpWrapper>
        {boxes[step]}
      </ContentWrapper>
      <AdaptedFooter />
    </Wrapper>
  );
};
