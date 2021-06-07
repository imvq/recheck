import CustomButton from 'components/shared/CustomButton';
import { IProps } from './types';
import MenuBar from './MenuBar';
import * as styled from './styled';

/**
 * Menu with tabs to control the page content area.
 */
export default (props: IProps) => {
  const MenuContent = () => (
    <styled.MenuContent>
      <styled.MenuContentTitle>
        {props.currentProfileInfo.currentName}
      </styled.MenuContentTitle>

      <styled.MenuContentSpan dimmed>
        Запросов по моему профилю:&nbsp;&nbsp;
        <styled.MenuContentSpan>0</styled.MenuContentSpan>
      </styled.MenuContentSpan>
      <styled.MenuContentSpan dimmed>
        Доступно поисков:&nbsp;&nbsp;
        <styled.MenuContentSpan>0</styled.MenuContentSpan>
      </styled.MenuContentSpan>

      <styled.ProfilePictureWrapper>
        <styled.ProfilePicture
          src={props.currentProfileInfo.currentPhotoUrl}
          draggable='false'
        />
      </styled.ProfilePictureWrapper>
    </styled.MenuContent>
  );

  return (
    <styled.Wrapper>
      <styled.Menu>
        <MenuBar />
        <MenuContent />
        <styled.ButtonWrapper>
          <CustomButton height='2.3rem' isDisabled={false}>Новый поиск</CustomButton>
        </styled.ButtonWrapper>
      </styled.Menu>
    </styled.Wrapper>
  );
};
