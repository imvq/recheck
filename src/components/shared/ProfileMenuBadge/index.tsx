import { memo, useState, useEffect } from 'react';

import OutsideClickHandler from 'react-outside-click-handler';

import { connect } from 'react-redux';

import * as store from 'store';

import { historyManager } from 'commons/utils/services';
import { ReactComponent as CabinetSvg } from 'assets/images/shared/ProfileMenuBadge/Cabinet.svg';
import { ReactComponent as DoorSvg } from 'assets/images/shared/ProfileMenuBadge/Door.svg';
import { onExit } from 'commons/utils/misc';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (state: store.AppState): types.IStateProps => ({
  userPhotoUrl: store.getPhotoUrl(state),
  isConfirmed: store.getIsUserConfirmed(state),
  isPageLocked: store.getIsPageLocked(state)
});

const mapDispatchToProps: types.IDispatchProps = {
  setIsPageLocked: store.setIsPageLocked,
  setIsLoginPopupVisible: store.setIsLoginPopupVisible,
};

/**
 * Component used to provide OAuth2 with LinkedIn.
 */
function LoginBadge(props: types.IProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpansionAwaited, setIsExpansionAwaited] = useState(false);

  useEffect(() => {
    if (isExpansionAwaited && !props.isPageLocked) {
      setIsExpanded(true);
    }
  }, [props.isPageLocked]);

  return (
    <OutsideClickHandler onOutsideClick={() => setIsExpanded(false)}>
      <styled.ProfileMenuBadge>
        <styled.LoginButton
          src={props.userPhotoUrl || `${process.env.REACT_APP_MEDIA_URL}/user-default.png`}
          isAuthorized={!!props.userPhotoUrl}
          isTriggered={isExpanded}
          onClick={
          // true       | false          | null
          // authorized | not authorized | check is pending
          props.isConfirmed === null
            ? () => {
              props.setIsPageLocked(true);
              setIsExpansionAwaited(true);
            }
            : props.isConfirmed
              ? () => setIsExpanded(true)
              : () => props.setIsLoginPopupVisible(true)
        }
        />
        <styled.Menu isExpanded={isExpanded}>
          {props.isProfilePageAvailable && (
          <styled.MenuEntry onClick={() => historyManager.push('/profile')}>
            <styled.SvgWrapper><CabinetSvg /></styled.SvgWrapper>
            <span>Профиль</span>
          </styled.MenuEntry>
          )}

          <styled.MenuEntry onClick={() => onExit(() => props.setIsPageLocked(true))}>
            <styled.SvgWrapper><DoorSvg /></styled.SvgWrapper>
            <span>Выйти</span>
          </styled.MenuEntry>
        </styled.Menu>
      </styled.ProfileMenuBadge>
    </OutsideClickHandler>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(LoginBadge));
