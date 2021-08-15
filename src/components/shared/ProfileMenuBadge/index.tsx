import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';

import { ReactComponent as DoorSvg } from 'assets/images/shared/ProfileMenuBadge/Door.svg';
import { ReactComponent as CabinetSvg } from 'assets/images/shared/ProfileMenuBadge/Cabinet.svg';
import { AppState, setPageLocked, setIsLoginPopupVisible, setCurrentProfileInfo } from 'store';
import { onExit } from 'commons/utils/functions';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  isAuthorized: store.auth.isAuthorized,
  isPageLocked: store.interaction.isPageLocked
});

const mapDispatchToProps: types.IDispatchProps = {
  lockPage: setPageLocked,
  setIsLoginPopupVisible,
  setCurrentProfileInfo
};

/**
 * Component used to provide OAuth2 with LinkedIn and Facebook.
 */
const LoginBadge = (props: types.IProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpansionAwaited, setIsExpansionAwaited] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isExpansionAwaited && !props.isPageLocked) {
      setIsExpanded(true);
    }
  }, [props.isPageLocked]);

  return (
    <OutsideClickHandler onOutsideClick={() => setIsExpanded(false)}>
      <styled.Wrapper>
        <styled.LoginButton onClick={
          // true       | false          | null
          // authorized | not authorized | check is pending
          props.isAuthorized === null
            ? () => {
              props.lockPage();
              setIsExpansionAwaited(true);
            }
            : props.isAuthorized
              ? () => setIsExpanded(true)
              : () => props.setIsLoginPopupVisible(true)
        }
        />
        <styled.Menu isExpanded={isExpanded}>
          {props.isProfilePageAvailable && (
          <styled.MenuEntry onClick={() => history.push('/profile')}>
            <styled.SvgWrapper><CabinetSvg /></styled.SvgWrapper>
            <span>Профиль</span>
          </styled.MenuEntry>
          )}

          <styled.MenuEntry onClick={() => onExit(props.lockPage)}>
            <styled.SvgWrapper><DoorSvg /></styled.SvgWrapper>
            <span>Выйти</span>
          </styled.MenuEntry>
        </styled.Menu>
      </styled.Wrapper>
    </OutsideClickHandler>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginBadge);
