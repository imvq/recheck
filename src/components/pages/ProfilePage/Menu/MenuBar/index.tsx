import { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { ProfileMenuEntry } from 'utils/enums';
import { AppState, setCurrentMenuProfileEntry } from 'store';
import { IProps, IStateProps, IDispatchProps } from './types';
import { Wrapper, MenuEntryWrapper, MenuEntry } from './styled';

const mapStateToProps = (store: AppState): IStateProps => ({
  currentMenuProfileEntry: store.interaction.currentProfileMenuEntry
});

const mapDispatchToProps: IDispatchProps = {
  setCurrentMenuProfileEntry
};

/**
 * Stateful menu bar to control profile page content view.
 */
const MenuBar: FunctionComponent<IProps> = (props) => (
  <Wrapper>
    <MenuEntryWrapper>
      <MenuEntry
        isSelected={
          props.currentMenuProfileEntry === ProfileMenuEntry.MyReviews
        }
        onClick={() => props.setCurrentMenuProfileEntry(ProfileMenuEntry.MyReviews)}
      >
        Мои отзывы
      </MenuEntry>
    </MenuEntryWrapper>
    <MenuEntryWrapper>
      <MenuEntry
        isSelected={
          props.currentMenuProfileEntry === ProfileMenuEntry.History
        }
        onClick={() => props.setCurrentMenuProfileEntry(ProfileMenuEntry.History)}
      >
        История поиска
      </MenuEntry>
    </MenuEntryWrapper>
    <MenuEntryWrapper>
      <MenuEntry
        isSelected={
          props.currentMenuProfileEntry === ProfileMenuEntry.AboutMe
        }
        onClick={() => props.setCurrentMenuProfileEntry(ProfileMenuEntry.AboutMe)}
      >
        Обо мне
      </MenuEntry>
    </MenuEntryWrapper>
  </Wrapper>
);

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
