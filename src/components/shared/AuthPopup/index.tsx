import { memo } from 'react';
import { GoogleLogin } from 'react-google-login';
import { LinkedIn, LinkedInPopUp } from 'react-linkedin-login-oauth2';
import { connect } from 'react-redux';

import { apiClient } from 'commons/utils/services';
import { setIsPageLocked, setIsLoginPopupVisible } from 'store';
import { updateAuthorizationStatus } from 'store/thunks';

import CustomLinkedInLoginButton from './loginButtons/LinkedInLoginButton';
import CustomGoogleLoginButton from './loginButtons/GoogleLoginButton';

import * as types from './types';
import * as styled from './styled';

const mapDispatchToProps: types.IDispatchProps = {
  setIsPageLocked,
  setIsLoginPopupVisible,
  updateAuthorizationStatus
};

function AuthPopup(props: types.IProps) {
  function onLinkedInButtonClicked(authData: { code: string }) {
    props.setIsPageLocked(true);

    apiClient.exchangeLinkedInCode(authData.code, `${window.location.origin}/linkedin`)
      .then(linkedinResponse => {
        localStorage.setItem('accessToken', `linkedin@${linkedinResponse.data.accessToken}`);
        props.updateAuthorizationStatus();
      })
      .finally(() => {
        props.setIsLoginPopupVisible(false);
        props.setIsPageLocked(false);
      });
  }

  function onGoogleButtonClicked(authData: { accessToken: string }) {
    props.setIsPageLocked(true);

    localStorage.setItem('accessToken', `google@${authData.accessToken}`);
    props.updateAuthorizationStatus();

    props.setIsLoginPopupVisible(false);
    props.setIsPageLocked(false);
  }

  const ClosingButton = (
    <styled.TopWrapper>
      <styled.AdaptedCloseCross onClick={() => props.setIsLoginPopupVisible(false)} />
    </styled.TopWrapper>
  );

  const LinkedInLoginButton = (
    <LinkedIn
      clientId={process.env.REACT_APP_LINKEDIN_APP_CLIENT_ID as string}
      redirectUri={`${window.location.origin}/linkedin`}
      scope='r_liteprofile'
      onFailure={() => {}}
      onSuccess={onLinkedInButtonClicked}
    >
      <CustomLinkedInLoginButton />
    </LinkedIn>
  );

  const GoogleLoginButton = (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_APP_CLIENT_ID as string}
      cookiePolicy='single_host_origin'
      onFailure={() => {}}
      // @ts-ignore: GoogleLoginResponseOffline is guaranteed not to appear
      // via provided configuration.
      onSuccess={onGoogleButtonClicked}
      render={renderProps => <CustomGoogleLoginButton onClick={renderProps.onClick} />}
    />
  );

  const Body = (
    <styled.BodyWrapper>
      <styled.Title>Вход в личный кабинет</styled.Title>

      <styled.ButtonsGroupWrapper>
        {LinkedInLoginButton}
        {GoogleLoginButton}
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
