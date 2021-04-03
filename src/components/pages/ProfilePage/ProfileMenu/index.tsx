import {
  Wrapper, Menu, MenuBar, MenuContent, MenuContentTitle, MenuContentSpan,
  ProfilePictureWrapper, ProfilePicture
} from './styled';

export default () => (
  <Wrapper>
    <Menu>
      <MenuBar>Мои отзывы</MenuBar>
      <MenuContent>
        <MenuContentTitle>Лада Клищенко</MenuContentTitle>
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
            src='https://media-exp1.licdn.com/dms/image/C4E03AQHCQ5f05ekZcw/profile-displayphoto-shrink_100_100/0/1614266943813?e=1622678400&v=beta&t=4P5B61CQs7op9tMDJ0QT1mZx2H9k8GGZIe037rxOifA'
            draggable='false'
          />
        </ProfilePictureWrapper>
      </MenuContent>
    </Menu>
  </Wrapper>
);
