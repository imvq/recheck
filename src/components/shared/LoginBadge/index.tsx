import { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';

import { ReactComponent as DoorSvg } from 'assets/images/shared/LoginBadge/Door.svg';
import { ReactComponent as CabinetSvg } from 'assets/images/pages/LandingPage/GreetingsSection/Head/CabinetIcon.svg';
import { AppState, setPageLocked, setIsLoginPopupVisible, setCurrentProfileInfo } from 'store';
import { IProps, IStateProps, IDispatchProps } from './types';
import { Wrapper, LoginButton, Menu, MenuEntry, SvgWrapper } from './styled';
import { onExit } from './functions';

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
        <LoginButton onClick={
          props.isAuthorized
            ? toggleMenu
            : () => props.setIsLoginPopupVisible(true)
        }
        />
        <Menu isExpanded={isExpanded}>
          <MenuEntry onClick={() => history.push('/profile')}>
            <SvgWrapper><CabinetSvg /></SvgWrapper>
            <span>Профиль</span>
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
