import { FunctionComponent, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';

import * as computed from 'utils/computed';
import { cookieManager } from 'utils/cookies';
import { ReactComponent as DoorSvg } from 'assets/images/reusables/LoginBadge/Door.svg';
import { ReactComponent as CabinetSvg } from 'assets/images/pages/LandingPage/GreetingsSection/Head/CabinetIcon.svg';
import { AppState, setPageLocked } from 'store';
import { IProps, IStateProps, IDispatchProps } from './types';
import {
  Wrapper, LoginButton, Menu, MenuEntry, SvgWrapper
} from './styled';

const mapStateToProps = (store: AppState): IStateProps => ({
  isAuthorized: store.auth.isAuthorized
});

const mapDispatchToProps: IDispatchProps = {
  lockPage: setPageLocked
};

/**
 * Badge with login man picture.
 * Used to login/logout.
 */
const LoginBadge: FunctionComponent<IProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const history = useHistory();

  const toggleMenu = useCallback(() => {
    if (!isExpanded) {
      if (props.isAuthorized == null) {
        props.lockPage();
      } else {
        setIsExpanded(true);
      }
    } else {
      setIsExpanded(false);
    }
  }, [props.isAuthorized, isExpanded]);

  return (
    <OutsideClickHandler onOutsideClick={() => setIsExpanded(false)}>
      <Wrapper>
        <LoginButton onClick={toggleMenu} />
        <Menu isExpanded={isExpanded}>
          {props.isAuthorized
            ? (
              <>
                <MenuEntry onClick={() => history.push('/profile')}>
                  <SvgWrapper><CabinetSvg /></SvgWrapper>
                  <span>Профиль</span>
                </MenuEntry>
                <MenuEntry onClick={() => {
                  props.lockPage();
                  cookieManager.remove('BEARER');
                  window.location.replace(process.env.REACT_APP_START_PAGE as string);
                }}
                >
                  <SvgWrapper><DoorSvg /></SvgWrapper>
                  <span>Выйти</span>
                </MenuEntry>
              </>
            )
            : (
              <MenuEntry onClick={() => {
                window.location.replace(computed.LINKEDIN_PROFILE_REDIRECT_URL);
              }}
              >
                <SvgWrapper><DoorSvg /></SvgWrapper>
                <span>Войти через LinkedIn</span>
              </MenuEntry>
            )}
        </Menu>
      </Wrapper>
    </OutsideClickHandler>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginBadge);
