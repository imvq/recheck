import InfoWarrantyBoardSvg from 'assets/images/pages/LandingPage/InfoblockSection/InfoWarrantyBoard.svg';

import * as styledLocal from './styled';
import * as styledBase from '../BaseSubsection/styled';

const styled = { ...styledLocal, ...styledBase };

/**
 * Warranty info subsection.
 */
export default () => (
  <styled.Wrapper>
    <styled.BoardWrapper>
      <styled.Board backgroundSource={InfoWarrantyBoardSvg}>
        <styled.ParagraphWrapper>
          <styled.TitleWrapper>
            <styled.Title>
              <styled.TitleText>
                Будьте уверены, что отзыв
                был оставлен человеком с
                прошлого места работы.
              </styled.TitleText>
            </styled.Title>
          </styled.TitleWrapper>

          <styled.Text>
            Кандидат не сможет дать
            неправильный контакт.
          </styled.Text>
        </styled.ParagraphWrapper>
      </styled.Board>
    </styled.BoardWrapper>
  </styled.Wrapper>
);
