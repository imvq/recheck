import InfoTimeSaveBoardSvg from 'assets/images/pages/LandingPage/InfoblockSection/InfoTimeSaveBoard.svg';
import { Wrapper } from './styled';
import {
  BoardWrapper, Board, ParagraphWrapper, TitleWrapper, Title,
  TitleColorpickMain, TitleColorpickAux1, Text
} from '../BaseSubsection/styled';

export default () => (
  <Wrapper>
    <BoardWrapper>
      <Board backgroundSource={InfoTimeSaveBoardSvg}>
        <ParagraphWrapper>
          <TitleWrapper>
            <Title>
              <span>Экономьте время с </span>
              <TitleColorpickMain>re</TitleColorpickMain>
              <TitleColorpickAux1>Check</TitleColorpickAux1>
              <span>.</span>
            </Title>
          </TitleWrapper>
          <Text>
            Больше не нужно искать
            прошлых начальников
            кандидата, связываться с ними
            и спрашивать отзыв. Мы уже
            сделали это за вас.
          </Text>
        </ParagraphWrapper>
      </Board>
    </BoardWrapper>
  </Wrapper>
);
