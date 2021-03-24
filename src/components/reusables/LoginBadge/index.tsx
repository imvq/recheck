import { FunctionComponent, useState, useCallback } from 'react';
import { connect } from 'react-redux';

import * as computed from 'utils/computed';
import { AppState, setPageLocked } from 'store';
import { LoginBadgeStateProps, LoginBadgeDispatchProps } from './types';
import { LoginButton, Menu, MenuEntry } from './styled';

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
    <div>
      <LoginButton onClick={toggleMenu} />
      <Menu isExpanded={isExpanded}>
        {props.isAuthorized
          ? <MenuEntry>Выйти</MenuEntry>
          : (
            <MenuEntry onClick={() => {
              window.location.replace(computed.LINKEDIN_REDIRECT_URL);
            }}
            >
              Войти через LinkedIn
            </MenuEntry>
          )}
      </Menu>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginBadge);
