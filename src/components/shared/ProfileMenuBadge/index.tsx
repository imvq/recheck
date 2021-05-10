import { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';

import { ReactComponent as DoorSvg } from 'assets/images/shared/ProfileMenuBadge/Door.svg';
import { ReactComponent as CabinetSvg } from 'assets/images/shared/ProfileMenuBadge/Cabinet.svg';
import { ReactComponent as ReviewSvg } from 'assets/images/shared/ProfileMenuBadge/Review.svg';
import { AppState, setPageLocked, setIsLoginPopupVisible, setCurrentProfileInfo } from 'store';
import { onExit } from 'utils/functions';
import { IProps, IStateProps, IDispatchProps } from './types';
import { Wrapper, LoginButton, Menu, MenuEntry, SvgWrapper } from './styled';

const mapStateToProps = (store: AppState): IStateProps => ({
  isAuthorized: store.auth.isAuthorized
});

const mapDispatchToProps: IDispatchProps = {
  lockPage: setPageLocked,
  setIsLoginPopupVisible,
  setCurrentProfileInfo
};

/**
 * Component used to provide OAuth2 with LinkedIn and Facebook.
 */
const LoginBadge: FunctionComponent<IProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const history = useHistory();

  return (
    <OutsideClickHandler onOutsideClick={() => setIsExpanded(false)}>
      <Wrapper>
        <LoginButton onClick={
          // true       | false          | null
          // authorized | not authorized | check is pending
          props.isAuthorized === null
            ? props.lockPage
            : props.isAuthorized
              ? () => setIsExpanded(true)
              : () => props.setIsLoginPopupVisible(true)
        }
        />
        <Menu isExpanded={isExpanded}>
          <MenuEntry onClick={() => history.push('/profile')}>
            <SvgWrapper><CabinetSvg /></SvgWrapper>
            <span>Профиль</span>
          </MenuEntry>
          <MenuEntry onClick={() => history.push('/review')}>
            <SvgWrapper><ReviewSvg /></SvgWrapper>
            <span>Создать отзыв</span>
          </MenuEntry>
          <MenuEntry onClick={() => onExit(props.lockPage)}>
            <SvgWrapper><DoorSvg /></SvgWrapper>
            <span>Выйти</span>
          </MenuEntry>
        </Menu>
      </Wrapper>
    </OutsideClickHandler>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginBadge);
