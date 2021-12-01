import { memo } from 'react';
import { LinkedIn, LinkedInPopUp } from 'react-linkedin-login-oauth2';
import { connect } from 'react-redux';

import { apiClient } from 'commons/utils/services';
import { setPageLocked, setIsLoginPopupVisible } from 'store';
import { updateAuthorizationStatus } from 'store/thunks';

import * as types from './types';
import * as styled from './styled';

const mapDispatchToProps: types.IDispatchProps = {
  setPageLocked,
  setIsLoginPopupVisible,
  updateAuthorizationStatus
};

function AuthPopup(props: types.IProps) {
  function onLinkedInButtonClicked(data: { code: string }) {
    props.setPageLocked(true);

    apiClient.exchangeLinkedInCode(data.code, `${window.location.origin}/linkedin`)
      .then(linkedinResponse => {
        localStorage.setItem('accessToken', linkedinResponse.data.accessToken);
        props.updateAuthorizationStatus();
      })
      .finally(() => {
        props.setIsLoginPopupVisible(false);
        props.setPageLocked(false);
      });
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
      onFailure={() => window.location.reload()}
      onSuccess={onLinkedInButtonClicked}
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
