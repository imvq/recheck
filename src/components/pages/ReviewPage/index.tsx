import { useState } from 'react';

import ReviewStage2 from 'assets/images/pages/ReviewPage/ReviewStage2.png';
import BoxStepInitial from './BoxStepInitial';
import {
  Wrapper, AdaptedHeader, AdaptedFooter,
  ContentWrapper,
  StageBreadcrumpWrapper, StageBreadcrumpImage
} from './styled';

const boxes = [
  <BoxStepInitial />
];

/**
 * Page in charge of adding a review.
 */
export default () => {
  const [step, setStep] = useState(0);

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
