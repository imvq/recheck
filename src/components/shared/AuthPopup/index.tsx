import { connect } from 'react-redux';
import { LinkedIn, LinkedInPopUp } from 'react-linkedin-login-oauth2';
import FacebookLogin from 'react-facebook-login';
import linkedinImage from 'react-linkedin-login-oauth2/assets/linkedin.png';

import { setPageLocked, setIsLoginPopupVisible, setIsAuthorized, setCurrentProfileInfo } from 'store';
import { IProps, IDispatchProps } from './types';
import { onError, onSuccessLinkedIn, onSuccessFacebook } from './functions';
import { Wrapper, Frame, ClickableBackground } from './styled';

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
        <img src={linkedinImage} alt='Войти через LinkedIn' style={{ maxWidth: '15rem' }} />
      </LinkedIn>
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_CLIENT_ID as string}
        fields='name,email,picture'
        callback={(result) => onSuccessFacebook(
          result,
          props.setIsLoginPopupVisible,
          props.setIsAuthorized,
          props.setCurrentProfileInfo
        )}
      />
    </Frame>
    <ClickableBackground onClick={() => props.setIsLoginPopupVisible(false)} />
  </Wrapper>
);

export default connect(null, mapDispatchToProps)(AuthPopup);
