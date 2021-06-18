import { connect } from 'react-redux';
import { LinkedIn, LinkedInPopUp } from 'react-linkedin-login-oauth2';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import { setPageLocked, setIsLoginPopupVisible, setIsAuthorized, setCurrentProfileInfo } from 'store';
import { onError, onSuccessLinkedIn, onSuccessFacebook } from './functions';

import * as types from './types';
import * as styled from './styled';

const mapDispatchToProps: types.IDispatchProps = {
  setPageLocked,
  setIsLoginPopupVisible,
  setIsAuthorized,
  setCurrentProfileInfo
};

const AuthPopup = (props: types.IProps) => (
  <styled.Wrapper>
    <LinkedInPopUp />
    <styled.Frame>
      {/* Closing button. */}
      <styled.TopWrapper>
        <styled.AdaptedCloseCross onClick={() => props.setIsLoginPopupVisible(false)} />
      </styled.TopWrapper>

      {/* Body. */}
      <styled.BodyWrapper>
        <styled.Title>Вход в личный кабинет</styled.Title>

        <styled.ButtonsGroupWrapper>
          {/* LinkedIn login button. */}
          <LinkedIn
            clientId={process.env.REACT_APP_LINKEDIN_APP_CLIENT_ID}
            redirectUri={`${window.location.origin}/linkedin`}
            scope='r_liteprofile'
            onFailure={onError}
            onSuccess={(data: { code: string }) => {
              onSuccessLinkedIn(
                data.code,
                props.setPageLocked,
                props.setIsLoginPopupVisible,
                props.setIsAuthorized,
                props.setCurrentProfileInfo
              );
            }}
          >
            <styled.AdaptedLoginButtonLi />
          </LinkedIn>

          <styled.ButtonsGroupSpan>или</styled.ButtonsGroupSpan>

          {/* Facebook login button. */}
          <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_APP_CLIENT_ID as string}
            fields='id,name,picture'
            callback={(result: types.FacebookLoginResponse) => onSuccessFacebook(
              result,
              props.setPageLocked,
              props.setIsLoginPopupVisible,
              props.setIsAuthorized,
              props.setCurrentProfileInfo
            )}
            render={(renderProps: any) => (
              <styled.AdaptedLoginButtonFa onClick={renderProps.onClick} />
            )}
          />
        </styled.ButtonsGroupWrapper>
      </styled.BodyWrapper>
    </styled.Frame>
    <styled.ClickableBackground onClick={() => props.setIsLoginPopupVisible(false)} />
  </styled.Wrapper>
);

export default connect(null, mapDispatchToProps)(AuthPopup);
