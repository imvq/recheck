import controlledHistory from 'commons/utils/routing';

import Man from 'assets/images/pages/RegistrationPage/ConfirmationPopup/Man.png';

import * as types from './types';
import * as styled from './styled';

function goHome() {
  controlledHistory.replace('/await-user-confirmation');
}

const ClosingButton = (
  <styled.TopWrapper>
    <styled.AdaptedCloseCross onClick={goHome} />
  </styled.TopWrapper>
);

function ConfirmationPopup(props: types.IProps) {
  const Body = (
    <styled.BodyWrapper>
      <styled.TextWrapper>
        <styled.BodyText>Мы отправили письмо на адрес</styled.BodyText>
        <styled.BodyText>{props.email}</styled.BodyText>
        <styled.BodyText>Перейдите в него для подтверждения.</styled.BodyText>
      </styled.TextWrapper>
      <styled.AdaptedImage src={Man} />
    </styled.BodyWrapper>
  );

  return (
    <styled.Wrapper>
      <styled.FrameWrapper>
        <styled.Frame>
          {ClosingButton}
          {Body}
        </styled.Frame>
      </styled.FrameWrapper>

      <styled.ClickableBackground onClick={goHome} />
    </styled.Wrapper>
  );
}

export default ConfirmationPopup;
