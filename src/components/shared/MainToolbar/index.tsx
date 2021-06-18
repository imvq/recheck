import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { MainToolbarEntry } from 'utils/enums';
import { onExit } from 'utils/functions';
import { AppState, setPageLocked, setCurrentMainToolbarEntry } from 'store';
import controlledHistory from 'utils/routing';
import Logo from 'components/shared/Logo';
import MenuEntry from './MenuEntry';

import * as types from './types';
import * as styled from './styled';

function switchToSearch() {
  controlledHistory.replace('/search');
}

function switchToProfile() {
  controlledHistory.replace('/profile');
}

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentMainToolbarEntry: store.interaction.currentMainToolbarEntry
});

const mapDispatchToProps: types.IDispatchProps = {
  lockPage: setPageLocked,
  setCurrentMainToolbarEntry
};

const MainToolbar = (props: types.IProps) => (
  <styled.Wrapper className={props.className}>
    <styled.LogoWrapper><Link to='/'><Logo /></Link></styled.LogoWrapper>

    <styled.ButtonsWrapper>
      <styled.ButtonsGroupWrapper>
        <styled.ButtonWrapper>
          <MenuEntry
            onClick={() => {
              props.setCurrentMainToolbarEntry(MainToolbarEntry.ProfilePageMyReviews);
              switchToProfile();
            }}
            isPressed={props.currentMainToolbarEntry === MainToolbarEntry.ProfilePageMyReviews}
          >
            Мои отзывы
          </MenuEntry>
        </styled.ButtonWrapper>

        <styled.ButtonWrapper>
          <MenuEntry
            onClick={() => {
              props.setCurrentMainToolbarEntry(MainToolbarEntry.ProfilePageHistory);
              switchToProfile();
            }}
            isPressed={props.currentMainToolbarEntry === MainToolbarEntry.ProfilePageHistory}
          >
            История поиска
          </MenuEntry>
        </styled.ButtonWrapper>
      </styled.ButtonsGroupWrapper>

      <styled.ButtonsGroupWrapper>
        <styled.ButtonWrapper>
          <MenuEntry
            onClick={() => {
              props.setCurrentMainToolbarEntry(MainToolbarEntry.ProfilePageAboutMe);
              switchToProfile();
            }}
            isPressed={props.currentMainToolbarEntry === MainToolbarEntry.ProfilePageAboutMe}
          >
            Обо мне
          </MenuEntry>
        </styled.ButtonWrapper>

        <styled.ButtonWrapper>
          <MenuEntry
            onClick={() => props.setCurrentMainToolbarEntry(MainToolbarEntry.TopUpAnAccount)}
            isPressed={props.currentMainToolbarEntry === MainToolbarEntry.TopUpAnAccount}
          >
            Пополнить счёт
          </MenuEntry>
        </styled.ButtonWrapper>

        <styled.ButtonWrapper>
          <MenuEntry
            onClick={() => props.setCurrentMainToolbarEntry(MainToolbarEntry.AddWorkplace)}
            isPressed={props.currentMainToolbarEntry === MainToolbarEntry.AddWorkplace}
          >
            Добавить место работы
          </MenuEntry>
        </styled.ButtonWrapper>

        <styled.ButtonWrapper>
          <MenuEntry
            onClick={() => {
              props.setCurrentMainToolbarEntry(MainToolbarEntry.NewSearch);
              switchToSearch();
            }}
            isPressed={props.currentMainToolbarEntry === MainToolbarEntry.NewSearch}
          >
            Новый поиск
          </MenuEntry>
        </styled.ButtonWrapper>
      </styled.ButtonsGroupWrapper>

      <styled.ButtonWrapper>
        <MenuEntry onClick={() => onExit(props.lockPage)} isPressed={false}>
          Выйти
        </MenuEntry>
      </styled.ButtonWrapper>
    </styled.ButtonsWrapper>
  </styled.Wrapper>
);

export default connect(mapStateToProps, mapDispatchToProps)(MainToolbar);
