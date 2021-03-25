import { FunctionComponent, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';

import * as computed from 'utils/computed';
import { cookieManager } from 'tools.common';
import { ReactComponent as DoorSvg } from 'assets/images/reusables/LoginBadge/Door.svg';
import { AppState, setPageLocked } from 'store';
import { LoginBadgeStateProps, LoginBadgeDispatchProps } from './types';
import {
  Wrapper, LoginButton, Menu, MenuEntry, DoorWrapper
} from './styled';

const mapStateToProps = (store: AppState): LoginBadgeStateProps => ({
  isAuthorized: store.auth.isAuthorized
});

const mapDispatchToProps: LoginBadgeDispatchProps = {
  lockPage: setPageLocked
};

/**
 * Badge with login man picture.
 * Used to login/logout.
 * Container component.
 */
const LoginBadge: FunctionComponent<LoginBadgeStateProps & LoginBadgeDispatchProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
              <MenuEntry onClick={() => {
                cookieManager.remove('BEARER');
              }}
              >
                <DoorWrapper><DoorSvg /></DoorWrapper>
                <span>Выйти</span>
              </MenuEntry>
            )
            : (
              <MenuEntry onClick={() => {
                window.location.replace(computed.LINKEDIN_REDIRECT_URL);
              }}
              >
                <DoorWrapper><DoorSvg /></DoorWrapper>
                <span>Войти через LinkedIn</span>
              </MenuEntry>
            )}
        </Menu>
      </Wrapper>
    </OutsideClickHandler>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginBadge);
