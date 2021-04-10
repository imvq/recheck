import { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { LinkedIn, LinkedInPopUp } from 'react-linkedin-login-oauth2';
import linkedinImage from 'react-linkedin-login-oauth2/assets/linkedin.png';
import OutsideClickHandler from 'react-outside-click-handler';

import { ReactComponent as DoorSvg } from 'assets/images/shared/LoginBadge/Door.svg';
import { ReactComponent as CabinetSvg } from 'assets/images/pages/LandingPage/GreetingsSection/Head/CabinetIcon.svg';
import { AppState, setPageLocked, setIsAuthorized, setCurrentProfileInfo } from 'store';
import { IProps, IStateProps, IDispatchProps } from './types';
import { Wrapper, LoginButton, Menu, MenuEntry, SvgWrapper } from './styled';
import { onExit, onError, onSuccessLinkedIn } from '../functions';

const mapStateToProps = (store: AppState): IStateProps => ({
  isAuthorized: store.auth.isAuthorized
});

const mapDispatchToProps: IDispatchProps = {
  lockPage: setPageLocked,
  setIsAuthorized,
  setCurrentProfileInfo
};

/**
 * Component used to provide OAuth2 with LinkedIn and Facebook.
 */
const LoginBadge: FunctionComponent<IProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const history = useHistory();

  const toggleMenu = () => {
    if (!isExpanded) {
      if (props.isAuthorized === null) {
        props.lockPage();
      } else {
        setIsExpanded(true);
      }
    } else {
      setIsExpanded(false);
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setIsExpanded(false)}>
      <Wrapper>
        <LinkedInPopUp />
        <LoginButton onClick={toggleMenu} />
        <Menu isExpanded={isExpanded}>
          {props.isAuthorized
            ? (
              <>
                <MenuEntry onClick={() => history.push('/profile')}>
                  <SvgWrapper><CabinetSvg /></SvgWrapper>
                  <span>Профиль</span>
                </MenuEntry>
                <MenuEntry onClick={() => onExit(props.lockPage)}>
                  <SvgWrapper><DoorSvg /></SvgWrapper>
                  <span>Выйти</span>
                </MenuEntry>
              </>
            )
            : (
              <LinkedIn
                clientId={process.env.REACT_APP_LINKEDIN_APP_CLIENT_ID}
                redirectUri={`${window.location.origin}/linkedin`}
                onFailure={onError}
                onSuccess={(data: { code: string }) => {
                  onSuccessLinkedIn(data.code, props.setIsAuthorized, props.setCurrentProfileInfo);
                }}
              >
                <img src={linkedinImage} alt='Войти через LinkedIn' style={{ maxWidth: '15rem' }} />
              </LinkedIn>
            )}
        </Menu>
      </Wrapper>
    </OutsideClickHandler>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginBadge);