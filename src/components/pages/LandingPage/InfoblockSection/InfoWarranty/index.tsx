import InfoWarrantyBoardSvg from 'assets/images/pages/LandingPage/InfoblockSection/InfoWarrantyBoard.svg';
import { Wrapper } from './styled';
import {
  BoardWrapper, Board, ParagraphWrapper, TitleWrapper, Title, Text
} from '../BaseSubsection/styled';

/**
 * Warranty info subsection.
 */
export default () => (
  <Wrapper>
    <BoardWrapper>
      <Board backgroundSource={InfoWarrantyBoardSvg}>
        <ParagraphWrapper>
          <TitleWrapper>
            <Title>
              <span>
                Будьте уверены, что отзыв
                был оставлен человеком с
                прошлого места работы.
              </span>
            </Title>
          </TitleWrapper>
          <Text>
            Кандидат не сможет дать
            неправильный контакт.
          </Text>
        </ParagraphWrapper>
      </Board>
    </BoardWrapper>
  </Wrapper>
);
