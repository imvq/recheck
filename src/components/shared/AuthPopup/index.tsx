import { connect } from 'react-redux';
import { LinkedIn, LinkedInPopUp } from 'react-linkedin-login-oauth2';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import { setPageLocked, setIsLoginPopupVisible, setIsAuthorized, setCurrentProfileInfo } from 'store';
import { IProps, IDispatchProps, FacebookLoginResponse } from './types';
import { onError, onSuccessLinkedIn, onSuccessFacebook } from './functions';
import {
  Wrapper, TopWrapper, BodyWrapper, Title, AdaptedCloseCross, Frame,
  ClickableBackground, AdaptedLoginButtonLi, AdaptedLoginButtonFa,
  ButtonsGroupWrapper, ButtonsGroupSpan
} from './styled';

const mapDispatchToProps: IDispatchProps = {
  setPageLocked,
  setIsLoginPopupVisible,
  setIsAuthorized,
  setCurrentProfileInfo
};

const AuthPopup = (props: IProps) => (
  <Wrapper>
    <LinkedInPopUp />
    <Frame>
      {/* Closing button. */}
      <TopWrapper>
        <AdaptedCloseCross onClick={() => props.setIsLoginPopupVisible(false)} />
      </TopWrapper>

      {/* Body. */}
      <BodyWrapper>
        <Title>Вход в личный кабинет</Title>

        <ButtonsGroupWrapper>
          {/* LinkedIn login button. */}
          <LinkedIn
            clientId={process.env.REACT_APP_LINKEDIN_APP_CLIENT_ID}
            redirectUri={`${window.location.origin}/linkedin`}
            scope='r_emailaddress r_liteprofile'
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
            <AdaptedLoginButtonLi />
          </LinkedIn>

          <ButtonsGroupSpan>или</ButtonsGroupSpan>

          {/* Facebook login button. */}
          <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_APP_CLIENT_ID as string}
            fields='name,email,picture'
            callback={(result: FacebookLoginResponse) => onSuccessFacebook(
              result,
              props.setIsLoginPopupVisible,
              props.setIsAuthorized,
              props.setCurrentProfileInfo
            )}
            render={(renderProps: any) => <AdaptedLoginButtonFa onClick={renderProps.onClick} />}
          />
        </ButtonsGroupWrapper>
      </BodyWrapper>
    </Frame>
    <ClickableBackground onClick={() => props.setIsLoginPopupVisible(false)} />
  </Wrapper>
);

export default connect(null, mapDispatchToProps)(AuthPopup);
