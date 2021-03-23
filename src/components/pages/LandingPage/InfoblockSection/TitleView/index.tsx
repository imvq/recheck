import {
  Wrapper, TextWrapper, Text, TextColorpickMain, TextColorpickAux1
} from './styled';

/**
 * Title of infoblock.
 */
export default () => (
  <Wrapper id='InfoblockTitle'>
    <TextWrapper>
      <Text>
        <Text>Дополнительный </Text>
        <TextColorpickMain>re</TextColorpickMain>
        <TextColorpickAux1>Check </TextColorpickAux1>
        <Text>кандидатов</Text>
      </Text>
    </TextWrapper>
  </Wrapper>
);
