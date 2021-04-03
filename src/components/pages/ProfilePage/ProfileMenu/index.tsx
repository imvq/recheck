import { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { AppState } from 'store';
import { IProps, IStateProps } from './types';
import {
  Wrapper, Menu, MenuBar, MenuContent, MenuContentTitle, MenuContentSpan,
  ProfilePictureWrapper, ProfilePicture
} from './styled';

const mapStateToProps = (store: AppState): IStateProps => ({
  currentProfileInfo: store.profile.currentProfileInfo
});

const ProfileMenu: FunctionComponent<IProps> = (props) => (
  <Wrapper>
    <Menu>
      <MenuBar>Мои отзывы</MenuBar>
      <MenuContent>
        <MenuContentTitle>
          {props.currentProfileInfo.currentName}
        </MenuContentTitle>
        <MenuContentSpan dimmed>
          Запросов по моему профилю:&nbsp;&nbsp;
          <MenuContentSpan>0</MenuContentSpan>
        </MenuContentSpan>
        <MenuContentSpan dimmed>
          Доступно поисков:&nbsp;&nbsp;
          <MenuContentSpan>0</MenuContentSpan>
        </MenuContentSpan>
        <ProfilePictureWrapper>
          <ProfilePicture
            src={props.currentProfileInfo.currentPhotoUrl}
            draggable='false'
          />
        </ProfilePictureWrapper>
      </MenuContent>
    </Menu>
  </Wrapper>
);

export default connect(mapStateToProps)(ProfileMenu);
