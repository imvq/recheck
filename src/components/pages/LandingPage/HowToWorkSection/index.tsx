import { Wrapper } from './styled';
import TitleView from './TitleView';
import StepFirstView from './StepFirstView';
import StepSecondView from './StepSecondView';
import StepThirdView from './StepThirdView';

/**
 * 'How to work' section. Group of blocks describing work of the project.
 */
export default () => (
  <Wrapper>
    <TitleView />
    <StepFirstView />
    <StepSecondView />
    <StepThirdView />
  </Wrapper>
);
