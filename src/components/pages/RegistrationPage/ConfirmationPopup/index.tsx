import controlledHistory from 'commons/utils/routing';

import ManPath from 'assets/images/pages/RegistrationPage/ConfirmationPopup/Man.png';

import * as types from './types';
import * as styled from './styled';

function goHome() {
  controlledHistory.replace('/await-user-confirmation');
}

export default (props: types.IProps) => (
  <styled.Wrapper>
    <styled.FrameWrapper>
      <styled.Frame>
        {/* Closing button. */}
        <styled.TopWrapper>
          <styled.AdaptedCloseCross onClick={goHome} />
        </styled.TopWrapper>

        {/* Body. */}
        <styled.BodyWrapper>
          <styled.TextWrapper>
            <styled.BodyText>Мы отправили письмо на адрес</styled.BodyText>
            <styled.BodyText>{props.email}</styled.BodyText>
            <styled.BodyText>Перейдите в него для подтверждения.</styled.BodyText>
          </styled.TextWrapper>
          <styled.AdaptedImage src={ManPath} />
        </styled.BodyWrapper>
      </styled.Frame>
    </styled.FrameWrapper>

    <styled.ClickableBackground onClick={goHome} />
  </styled.Wrapper>
);
