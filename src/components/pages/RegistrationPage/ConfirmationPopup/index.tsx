import { memo } from 'react';

import * as store from 'store';

import Man from 'assets/images/pages/RegistrationPage/ConfirmationPopup/Man.png';

import * as types from './types';
import * as styled from './styled';

const onClose = () => window.location.replace('/await-user-confirmation');

const mapStateToProps = (state: store.AppState): types.IStateProps => ({
  isRedirectedFromOrigin: store.getIsRedirectedFromOrigin(state)
});

const mapDispatchToProps: types.IDispatchProps = {
  setIsRedirectedFromOrigin: store.setIsRedirectedFromOrigin
};

const ClosingButton = (
  <styled.TopWrapper>
    <styled.AdaptedCloseCross onClick={onClose} />
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

      <styled.ClickableBackground onClick={onClose} />
    </styled.Wrapper>
  );
}

export default memo(ConfirmationPopup);
