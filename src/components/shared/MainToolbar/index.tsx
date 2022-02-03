import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as store from 'store';

import { mainToolbarEntries } from 'commons/types/unions';
import { jumpTo, showToast } from 'commons/utils/misc';

import Logo from 'components/shared/Logo';

import FakeEntry from './FakeEntry';
import MenuEntry from './MenuEntry';

import * as styled from './styled';

interface Props {
  className?: string;
}

function MainToolbar(props: Props) {
  const entry = useSelector((state: store.AppState) => state.misc.currentMainToolbarEntry);
  const role = useSelector((state: store.AppState) => state.misc.currentUserRole);

  const dispatch = useDispatch<store.AppDispatch>();

  const RecruiterOptions = (
    <>
      <styled.ButtonWrapper>
        <MenuEntry
          onClick={() => {
            dispatch(store.setCurrentMainToolbarEntry(mainToolbarEntries.Invite));
            jumpTo('/profile');
          }}
          isPressed={entry === mainToolbarEntries.Invite}
        >
          Пригласить кандидата
        </MenuEntry>
      </styled.ButtonWrapper>

      <styled.ButtonWrapper>
        <MenuEntry
          onClick={() => {
            dispatch(store.setCurrentMainToolbarEntry(mainToolbarEntries.ObservedUsers));
            jumpTo('/profile');
          }}
          isPressed={entry === mainToolbarEntries.ObservedUsers
            || (entry === mainToolbarEntries.Welcome && role === 'recruiter')}
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
            dispatch(store.setCurrentMainToolbarEntry(mainToolbarEntries.AboutMe));
            jumpTo('/profile');
          }}
          isPressed={entry === mainToolbarEntries.AboutMe
            || (entry === mainToolbarEntries.Welcome && role === 'candidate')}
        >
          Мой профиль
        </MenuEntry>
      </styled.ButtonWrapper>

      <styled.ButtonWrapper>
        <FakeEntry onClick={() => dispatch(store.setIsAskForReviewPopupVisible(true))}>
          Запросить отзыв о себе
        </FakeEntry>
      </styled.ButtonWrapper>

      <styled.ButtonWrapper>
        <MenuEntry
          onClick={() => {
            dispatch(store.setCurrentMainToolbarEntry(mainToolbarEntries.MyReviews));
            jumpTo('/profile');
          }}
          isPressed={entry === mainToolbarEntries.MyReviews}
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
          {role === 'recruiter' && RecruiterOptions}

          {role === 'candidate' && CandidateOptions}
        </styled.ButtonsGroupWrapper>
      </styled.ButtonsWrapper>
    </styled.MainToolbar>
  );
}

export default memo(MainToolbar);
