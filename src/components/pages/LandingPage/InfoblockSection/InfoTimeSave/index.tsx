import { memo } from 'react';

import InfoTimeSaveBoardSvg from 'assets/images/pages/LandingPage/InfoblockSection/InfoTimeSaveBoard.svg';

import * as styledLocal from './styled';
import * as styledBase from '../BaseSubsection/styled';

const styled = { ...styledLocal, ...styledBase };

export default memo(() => (
  <styled.Wrapper>
    <styled.BoardWrapper>
      <styled.Board backgroundSource={InfoTimeSaveBoardSvg}>
        <styled.ParagraphWrapper>
          <styled.TitleWrapper>
            <styled.Title>
              <styled.TitleText>Экономьте время с </styled.TitleText>
              <styled.TitleColorpickMain>re</styled.TitleColorpickMain>
              <styled.TitleColorpickAux1>Check</styled.TitleColorpickAux1>
              <styled.TitleText>.</styled.TitleText>
            </styled.Title>
          </styled.TitleWrapper>

          <styled.Text>
            Больше не нужно искать
            прошлых начальников
            кандидата, связываться с ними
            и спрашивать отзыв. Мы уже
            сделали это за вас.
          </styled.Text>
        </styled.ParagraphWrapper>
      </styled.Board>
    </styled.BoardWrapper>
  </styled.Wrapper>
));
