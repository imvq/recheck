import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import controlledHistory from 'commons/utils/routing';

import { MainToolbarEntry } from 'commons/utils/enums';
import { onExit, showToast } from 'commons/utils/misc';
import { AppState, setPageLocked, setCurrentMainToolbarEntry } from 'store';

import Logo from 'components/shared/Logo';

import FakeEntry from './FakeEntry';
import MenuEntry from './MenuEntry';

import * as types from './types';
import * as styled from './styled';

function copyLink(link: string) {
  navigator.clipboard.writeText(`${window.location.origin}?recruiter=${link}`);
  showToast('Ссылка приглашения скопирована. Отправьте её кандидату');
}

function switchToSearch() {
  controlledHistory.replace('/search');
}

function switchToProfile() {
  controlledHistory.replace('/profile');
}

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentMainToolbarEntry: store.interaction.currentMainToolbarEntry,
  currentProfileInfo: store.profile.currentProfileInfo
});

const mapDispatchToProps: types.IDispatchProps = {
  lockPage: setPageLocked,
  setCurrentMainToolbarEntry
};

function MainToolbar(props: types.IProps) {
  return (
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
          <FakeEntry onClick={() => copyLink(props.currentProfileInfo.currentShareableId)}>
            Пригласить кандидата
          </FakeEntry>
        </styled.ButtonWrapper>

        <styled.ButtonWrapper>
          <FakeEntry onClick={() => onExit(props.lockPage)}>
            Выйти
          </FakeEntry>
        </styled.ButtonWrapper>
      </styled.ButtonsWrapper>

      {/* Toast notification wrapper. */}
      <ToastContainer />
    </styled.Wrapper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MainToolbar);
