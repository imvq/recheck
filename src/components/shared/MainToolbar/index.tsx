import { memo } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as store from 'store';

import { mainToolbarEntries } from 'commons/types/unions';
import { showToast } from 'commons/utils/misc';

import Logo from 'components/shared/Logo';

import FakeEntry from './FakeEntry';
import MenuEntry from './MenuEntry';

import * as types from './types';
import * as styled from './styled';

function copyReviewLink(targetShareableId: string) {
  navigator.clipboard.writeText(`${window.location.origin}/review/create/${targetShareableId}`);
  showToast('Ссылка на оставление отзыва скопирована.');
}

const mapStateToProps = (state: store.AppState): types.IStateProps => ({
  currentMainToolbarEntry: store.getCurrentMainToolbarEntry(state),
  currentUserRole: store.getCurrentUserRole(state),
  shareableId: state.profile.shareableId
});

const mapDispatchToProps: types.IDispatchProps = {
  setCurrentMainToolbarEntry: store.setCurrentMainToolbarEntry
};

function MainToolbar(props: types.IProps) {
  const RecruiterOptions = (
    <>
      <styled.ButtonWrapper>
        <MenuEntry
          onClick={() => {
            props.setCurrentMainToolbarEntry(mainToolbarEntries.Invite);
          }}
          isPressed={props.currentMainToolbarEntry === mainToolbarEntries.Invite}
        >
          Пригласить кандидата
        </MenuEntry>
      </styled.ButtonWrapper>

      <styled.ButtonWrapper>
        <MenuEntry
          onClick={() => {
            props.setCurrentMainToolbarEntry(mainToolbarEntries.ObservedUsers);
          }}
          isPressed={props.currentMainToolbarEntry === mainToolbarEntries.ObservedUsers}
        >
          Мои кандидаты
        </MenuEntry>
      </styled.ButtonWrapper>
    </>
  );

  const CandidateOptions = (
    <>
      <styled.ButtonWrapper>
        <MenuEntry
          onClick={() => {
            props.setCurrentMainToolbarEntry(mainToolbarEntries.AboutMe);
          }}
          isPressed={props.currentMainToolbarEntry === mainToolbarEntries.AboutMe}
        >
          Мой профиль
        </MenuEntry>
      </styled.ButtonWrapper>

      <styled.ButtonWrapper>
        <FakeEntry onClick={() => copyReviewLink(props.shareableId as string)}>
          Запросить отзыв о себе
        </FakeEntry>
      </styled.ButtonWrapper>

      <styled.ButtonWrapper>
        <MenuEntry
          onClick={() => {
            props.setCurrentMainToolbarEntry(mainToolbarEntries.MyReviews);
          }}
          isPressed={props.currentMainToolbarEntry === mainToolbarEntries.MyReviews}
        >
          Отзывы, оставленные мной
        </MenuEntry>
      </styled.ButtonWrapper>
    </>
  );

  return (
    <styled.MainToolbar className={props.className}>
      <styled.LogoWrapper><Link to='/'><Logo /></Link></styled.LogoWrapper>

      <styled.ButtonsWrapper>

        <styled.ButtonsGroupWrapper>
          <styled.ButtonWrapper>
            <MenuEntry
              onClick={() => {
                props.setCurrentMainToolbarEntry(mainToolbarEntries.Welcome);
              }}
              isPressed={props.currentMainToolbarEntry === mainToolbarEntries.Welcome}
            >
              Добро пожаловать
            </MenuEntry>
          </styled.ButtonWrapper>
        </styled.ButtonsGroupWrapper>

        <styled.ButtonsGroupWrapper>
          {props.currentUserRole === 'recruiter' && RecruiterOptions}

          {props.currentUserRole === 'candidate' && CandidateOptions}
        </styled.ButtonsGroupWrapper>

      </styled.ButtonsWrapper>
    </styled.MainToolbar>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(MainToolbar));
