import { IProps } from './types';
import MenuBar from './MenuBar';
import {
  Wrapper, Menu, MenuContent, MenuContentTitle, MenuContentSpan,
  ProfilePictureWrapper, ProfilePicture
} from './styled';

/**
 * Menu with tabs to control the page content area.
 */
export default (props: IProps) => (
  <Wrapper>
    <Menu>
      <MenuBar />
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
