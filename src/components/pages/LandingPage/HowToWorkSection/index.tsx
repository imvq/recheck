import { memo } from 'react';

import TitleView from './TitleView';
import StepFirstView from './StepFirstView';
import StepSecondView from './StepSecondView';
import StepThirdView from './StepThirdView';

import * as styled from './styled';

/**
 * 'How to work' section. Group of blocks describing work of the project.
 */
function HowToWorkSection() {
  return (
    <styled.Wrapper>
      <TitleView />
      <StepFirstView />
      <StepSecondView />
      <StepThirdView />
    </styled.Wrapper>
  );
}

export default memo(HowToWorkSection);
