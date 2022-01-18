import { memo } from 'react';

import cssVars from 'commons/styles/cssVars';

import { jumpTo } from 'commons/utils/misc';

import CustomButton from 'components/shared/CustomButton';

import * as types from './types';
import * as styled from './styled';

const jumpToSearchPage = () => jumpTo('/search');

/**
 * Menu with basic profile info.
 */
function ProfileHead(props: types.IProps) {
  let backgroundColor: string | undefined;

  if (props.isSolid) {
    backgroundColor = cssVars.colorBackgroundReviewBadge;
  }

  const MenuBar = (
    <styled.MenuBarWrapper backgroundColor={backgroundColor}>
      <styled.MenuContentTitle>
        {props.profileInfo.fullName}
      </styled.MenuContentTitle>
    </styled.MenuBarWrapper>
  );

  // Company and position.
  const Infoblock = (
    <>
      <styled.MenuContentSpan isDimmed>
        Должность:&nbsp;&nbsp;
        <styled.MenuContentSpan>{props.profileInfo.currentPosition}</styled.MenuContentSpan>
      </styled.MenuContentSpan>
      <styled.MenuContentSpan isDimmed>
        Место работы:&nbsp;&nbsp;
        <styled.MenuContentSpan>{props.profileInfo.currentCompanyName}</styled.MenuContentSpan>
      </styled.MenuContentSpan>
    </>
  );

  // Avatar.
  const Picture = (
    <styled.ProfilePictureWrapper>
      <styled.ProfilePicture
        src={props.profileInfo.photoUrl}
        draggable='false'
      />
    </styled.ProfilePictureWrapper>
  );

  // Main panel.
  const MenuContent = (
    <styled.MenuContent backgroundColor={backgroundColor}>
      {Infoblock}
      {Picture}
    </styled.MenuContent>
  );

  // Button panel.
  const Button = (
    <styled.ButtonWrapper>
      <CustomButton height='2.3rem' isDisabled={false} onClick={jumpToSearchPage}>
        Новый поиск
      </CustomButton>
    </styled.ButtonWrapper>
  );

  return (
    <styled.ProfileHead>
      <styled.Menu>
        {MenuBar}
        {MenuContent}
        {!props.noButtons && Button}
      </styled.Menu>
    </styled.ProfileHead>
  );
}

export default memo(ProfileHead);
