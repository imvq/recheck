import { memo } from 'react';
import { GoogleLogin } from 'react-google-login';
import { LinkedIn, LinkedInPopUp } from 'react-linkedin-login-oauth2';
import { connect } from 'react-redux';

import * as store from 'store';

import ContentSubareaDelimiter from 'components/shared/ContentSubareaDelimiter';

import { apiClient } from 'commons/utils/services';

import CustomLinkedInLoginButton from './loginButtons/LinkedInLoginButton';
import CustomGoogleLoginButton from './loginButtons/GoogleLoginButton';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (state: store.AppState): types.IStateProps => ({
  currentUserRole: store.getCurrentUserRole(state)
});

const mapDispatchToProps: types.IDispatchProps = {
  setIsPageLocked: store.setIsPageLocked,
  setIsLoginPopupVisible: store.setIsLoginPopupVisible,
  setCurrentUserRole: store.setCurrentUserRole,
  updateAuthorizationStatus: store.updateAuthorizationStatus
};

function AuthPopup(props: types.IProps) {
  function onLinkedInButtonClicked(authData: { code: string }) {
    props.setIsPageLocked(true);

    apiClient.exchangeLinkedInCode(authData.code, `${window.location.origin}/linkedin`)
      .then(linkedinResponse => {
        localStorage.setItem('accessToken', `linkedin@${linkedinResponse.data.accessToken}`);
        props.updateAuthorizationStatus();
      })
      .catch(() => {
        props.setIsPageLocked(false);
      })
      .finally(() => {
        props.setIsLoginPopupVisible(false);
      });
  }

  function onGoogleButtonClicked(authData: { accessToken: string }) {
    props.setIsPageLocked(true);

    localStorage.setItem('accessToken', `google@${authData.accessToken}`);
    props.updateAuthorizationStatus();

    props.setIsLoginPopupVisible(false);
  }

  const ClosingButton = (
    <styled.FrameUpperWrapper>
      <styled.CloseCross onClick={() => props.setIsLoginPopupVisible(false)} />
    </styled.FrameUpperWrapper>
  );

  const LinkedInLoginButton = (
    <LinkedIn
      clientId={process.env.REACT_APP_LINKEDIN_APP_CLIENT_ID as string}
      redirectUri={`${window.location.origin}/linkedin`}
      scope='r_liteprofile'
      onFailure={() => {}}
      onSuccess={onLinkedInButtonClicked}
    >
      <styled.LinkedInButton />
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
      render={renderProps => <styled.GoogleButton onClick={renderProps.onClick} />}
    />
  );

  const Body = (
    <styled.BodyWrapper>
      <styled.Title>Вход или регистрация</styled.Title>

      <styled.ButtonsGroupWrapper>
        <styled.Subtitle>Ваша роль:</styled.Subtitle>
        <ContentSubareaDelimiter half />
        <styled.RoleButtonForm>
          <styled.RoleButton
            isActive={props.currentUserRole === 'recruiter'}
            onClick={() => props.setCurrentUserRole('recruiter')}
          >
            Рекрутер
          </styled.RoleButton>
          <styled.RoleButton
            isActive={props.currentUserRole === 'candidate'}
            onClick={() => props.setCurrentUserRole('candidate')}
          >
            Кандидат
          </styled.RoleButton>
        </styled.RoleButtonForm>
      </styled.ButtonsGroupWrapper>

      <ContentSubareaDelimiter />

      <styled.ButtonsGroupWrapper>
        <styled.Subtitle>Войти с помощью:</styled.Subtitle>
        <ContentSubareaDelimiter half />
        {LinkedInLoginButton}
        {GoogleLoginButton}
      </styled.ButtonsGroupWrapper>
    </styled.BodyWrapper>
  );

  return (
    <styled.AuthPopup>
      <styled.Frame>
        {ClosingButton}
        {Body}
      </styled.Frame>

      {/* Absolute-pisitioned elements. */}
      <LinkedInPopUp />
      <styled.ClickableBackground onClick={() => props.setIsLoginPopupVisible(false)} />
    </styled.AuthPopup>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(AuthPopup));
