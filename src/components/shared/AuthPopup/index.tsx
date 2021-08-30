import { memo } from 'react';
import { LinkedIn, LinkedInPopUp } from 'react-linkedin-login-oauth2';
import { connect } from 'react-redux';

import { setPageLocked, setIsLoginPopupVisible, setIsAuthorized, setCurrentProfileInfo } from 'store';

import { onError, onSuccessLinkedIn } from './misc';

import * as types from './types';
import * as styled from './styled';

const mapDispatchToProps: types.IDispatchProps = {
  setPageLocked,
  setIsLoginPopupVisible,
  setIsAuthorized,
  setCurrentProfileInfo
};

function AuthPopup(props: types.IProps) {
  function onClickLinkedIn(data: { code: string }) {
    onSuccessLinkedIn(
      data.code,
      props.setPageLocked,
      props.setIsLoginPopupVisible,
      props.setIsAuthorized,
      props.setCurrentProfileInfo
    );
  }

  const ClosingButton = (
    <styled.TopWrapper>
      <styled.AdaptedCloseCross onClick={() => props.setIsLoginPopupVisible(false)} />
    </styled.TopWrapper>
  );

  const LinkedInLoginButton = (
    <LinkedIn
      clientId={process.env.REACT_APP_LINKEDIN_APP_CLIENT_ID}
      redirectUri={`${window.location.origin}/linkedin`}
      scope='r_liteprofile'
      onFailure={onError}
      onSuccess={onClickLinkedIn}
    >
      <styled.AdaptedLoginButtonLi />
    </LinkedIn>
  );

  const Body = (
    <styled.BodyWrapper>
      <styled.Title>Вход в личный кабинет</styled.Title>

      <styled.ButtonsGroupWrapper>
        {LinkedInLoginButton}

        {/* TODO: Organize Google login button here. */}
      </styled.ButtonsGroupWrapper>
    </styled.BodyWrapper>
  );

  return (
    <styled.Wrapper>
      <styled.Frame>
        {ClosingButton}
        {Body}
      </styled.Frame>

      {/* Absolute-pisitioned elements. */}
      <LinkedInPopUp />
      <styled.ClickableBackground onClick={() => props.setIsLoginPopupVisible(false)} />
    </styled.Wrapper>
  );
}

export default connect(null, mapDispatchToProps)(memo(AuthPopup));
