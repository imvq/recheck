import { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { ProfileMenuEntry } from 'utils/enums';
import { AppState, setCurrentMenuProfileEntry } from 'store';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentMenuProfileEntry: store.interaction.currentProfileMenuEntry
});

const mapDispatchToProps: types.IDispatchProps = {
  setCurrentMenuProfileEntry
};

/**
 * Stateful menu bar to control profile page content view.
 */
const MenuBar: FunctionComponent<types.IProps> = (props) => (
  <styled.Wrapper>
    <styled.MenuEntryWrapper>
      <styled.MenuEntry
        isSelected={
          props.currentMenuProfileEntry === ProfileMenuEntry.MyReviews
        }
        onClick={() => props.setCurrentMenuProfileEntry(ProfileMenuEntry.MyReviews)}
      >
        Мои отзывы
      </styled.MenuEntry>
    </styled.MenuEntryWrapper>

    <styled.MenuEntryWrapper>
      <styled.MenuEntry
        isSelected={
          props.currentMenuProfileEntry === ProfileMenuEntry.History
        }
        onClick={() => props.setCurrentMenuProfileEntry(ProfileMenuEntry.History)}
      >
        История поиска
      </styled.MenuEntry>
    </styled.MenuEntryWrapper>

    <styled.MenuEntryWrapper>
      <styled.MenuEntry
        isSelected={
          props.currentMenuProfileEntry === ProfileMenuEntry.AboutMe
        }
        onClick={() => props.setCurrentMenuProfileEntry(ProfileMenuEntry.AboutMe)}
      >
        Обо мне
      </styled.MenuEntry>
    </styled.MenuEntryWrapper>
  </styled.Wrapper>
);

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
