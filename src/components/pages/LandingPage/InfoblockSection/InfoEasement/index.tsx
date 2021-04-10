import InfoEasementBoardSvg from 'assets/images/pages/LandingPage/InfoblockSection/InfoEasementBoard.svg';
import { Wrapper } from './styled';
import { BoardWrapper, Board, ParagraphWrapper, TitleWrapper, Title, Text } from '../BaseSubsection/styled';

export default () => (
  <Wrapper>
    <BoardWrapper>
      <Board backgroundSource={InfoEasementBoardSvg}>
        <ParagraphWrapper>
          <TitleWrapper>
            <Title>
              <span>
                Можно проверять кадидата
                ещё до того, как он придёт
                на собеседование.
              </span>
            </Title>
          </TitleWrapper>
          <Text>
            Теперь не обязательно ждать
            финальное собеседование,
            чтобы получить рекомендацию.
          </Text>
        </ParagraphWrapper>
      </Board>
    </BoardWrapper>
  </Wrapper>
);
