import { memo } from 'react';

import InfoEasementBoardSvg from 'assets/images/pages/LandingPage/InfoblockSection/InfoEasementBoard.svg';

import * as styledLocal from './styled';
import * as styledBase from '../BaseSubsection/styled';

const styled = { ...styledLocal, ...styledBase };

const Title = (
  <styled.TitleWrapper>
    <styled.Title>
      <styled.TitleText>
        Можно проверять кадидата
        ещё до того, как он придёт
        на собеседование.
      </styled.TitleText>
    </styled.Title>
  </styled.TitleWrapper>
);

const Text = (
  <styled.Text>
    Теперь не обязательно ждать
    финальное собеседование,
    чтобы получить рекомендацию.
  </styled.Text>
);

function InfoEasement() {
  return (
    <styled.Wrapper>
      <styled.BoardWrapper>
        <styled.Board backgroundSource={InfoEasementBoardSvg}>
          <styled.ParagraphWrapper>
            {Title}
            {Text}
          </styled.ParagraphWrapper>
        </styled.Board>
      </styled.BoardWrapper>
    </styled.Wrapper>
  );
}

export default memo(InfoEasement);
