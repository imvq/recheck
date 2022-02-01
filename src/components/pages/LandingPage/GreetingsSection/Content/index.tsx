import { memo } from 'react';

import ContentPic from 'assets/images/pages/LandingPage/GreetingsSection/Content/ContentPic.svg';

import ProfileButtonGroup from './ProfileButtonGroup';

import * as styled from './styled';

const PictureSection = (
  <styled.PictureWrapper>
    <styled.Picture src={ContentPic} alt='' draggable='false' />
  </styled.PictureWrapper>
);

const TextSection = (
  <styled.TextWrapper>
    <styled.ActionGroup>
      <styled.ActionGroupText>
        Найди отзывы о кандидате с прошлых мест работы
      </styled.ActionGroupText>
      <ProfileButtonGroup />
    </styled.ActionGroup>
  </styled.TextWrapper>
);

function Content() {
  return (
    <styled.Wrapper>
      {PictureSection}
      {TextSection}
    </styled.Wrapper>
  );
}

export default memo(Content);
