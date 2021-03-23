import {
  Wrapper, TextWrapper, Text, TextColorpickMain, TextColorpickAux1
} from './styled';

/**
 * Title of 'How to work' section.
 */
export default () => (
  <Wrapper id='HowToWorkTitle'>
    <TextWrapper>
      <Text>
        <Text>Как работает </Text>
        <TextColorpickMain>re</TextColorpickMain>
        <TextColorpickAux1>Check</TextColorpickAux1>
        <Text>?</Text>
      </Text>
    </TextWrapper>
  </Wrapper>
);
