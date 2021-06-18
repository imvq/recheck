import InfoEasementBoardSvg from 'assets/images/pages/LandingPage/InfoblockSection/InfoEasementBoard.svg';

import * as styledLocal from './styled';
import * as styledBase from '../BaseSubsection/styled';

const styled = { ...styledLocal, ...styledBase };

export default () => (
  <styled.Wrapper>
    <styled.BoardWrapper>
      <styled.Board backgroundSource={InfoEasementBoardSvg}>
        <styled.ParagraphWrapper>
          <styled.TitleWrapper>
            <styled.Title>
              <styled.TitleText>
                Можно проверять кадидата
                ещё до того, как он придёт
                на собеседование.
              </styled.TitleText>
            </styled.Title>
          </styled.TitleWrapper>

          <styled.Text>
            Теперь не обязательно ждать
            финальное собеседование,
            чтобы получить рекомендацию.
          </styled.Text>
        </styled.ParagraphWrapper>
      </styled.Board>
    </styled.BoardWrapper>
  </styled.Wrapper>
);
