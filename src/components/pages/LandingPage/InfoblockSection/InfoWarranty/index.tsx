import { memo } from 'react';

import InfoWarrantyBoardSvg from 'assets/images/pages/LandingPage/InfoblockSection/InfoWarrantyBoard.svg';

import * as styledBase from '../BaseSubsection/styled';
import * as styledLocal from './styled';

const styled = { ...styledLocal, ...styledBase };

const Title = (
  <styled.TitleWrapper>
    <styled.Title>
      <styled.TitleText>
        Будьте уверены, что отзыв
        был оставлен человеком с
        прошлого места работы.
      </styled.TitleText>
    </styled.Title>
  </styled.TitleWrapper>
);

const Text = (
  <styled.Text>
    Кандидат не сможет дать
    неправильный контакт.
  </styled.Text>
);

function InfoWarranty() {
  return (
    <styled.Wrapper>
      <styled.BoardWrapper>
        <styled.Board backgroundSource={InfoWarrantyBoardSvg}>
          <styled.ParagraphWrapper>
            {Title}
            {Text}
          </styled.ParagraphWrapper>
        </styled.Board>
      </styled.BoardWrapper>
    </styled.Wrapper>
  );
}

export default memo(InfoWarranty);
