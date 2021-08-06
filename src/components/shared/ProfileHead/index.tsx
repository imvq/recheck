import { memo } from 'react';
import { connect } from 'react-redux';

import { MainToolbarEntry } from 'utils/enums';
import { setCurrentMainToolbarEntry } from 'store';
import controlledHistory from 'utils/routing';
import CustomButton from 'components/shared/CustomButton';
import MenuBar from './MenuBar';

import * as types from './types';
import * as styled from './styled';

const mapDispatchToProps: types.IDispatchProps = {
  setCurrentMainToolbarEntry
};

/**
 * Menu with tabs to control the page content area.
 */
const Menu = (props: types.IProps) => {
  // Company and position.
  const Infoblock = (
    <>
      <styled.MenuContentSpan dimmed>
        Должность:&nbsp;&nbsp;
        <styled.MenuContentSpan>{props.profileInfo.currentPosition}</styled.MenuContentSpan>
      </styled.MenuContentSpan>
      <styled.MenuContentSpan dimmed>
        Место работы:&nbsp;&nbsp;
        <styled.MenuContentSpan>{props.profileInfo.currentCompany}</styled.MenuContentSpan>
      </styled.MenuContentSpan>
    </>
  );

  // Avatar.
  const Picture = (
    <styled.ProfilePictureWrapper>
      <styled.ProfilePicture
        src={props.profileInfo.currentPhotoUrl}
        draggable='false'
      />
    </styled.ProfilePictureWrapper>
  );

  // Main panel.
  const MenuContent = (
    <styled.MenuContent>
      {Infoblock}
      {Picture}
    </styled.MenuContent>
  );

  const onButtonClick = () => {
    props.setCurrentMainToolbarEntry(MainToolbarEntry.NewSearch);
    controlledHistory.push('/search');
  };

  // Button panel.
  const Button = (
    <styled.ButtonWrapper>
      <CustomButton height='2.3rem' isDisabled={false} onClick={onButtonClick}>
        Новый поиск
      </CustomButton>
    </styled.ButtonWrapper>
  );

  return (
    <styled.Wrapper>
      <styled.Menu>
        <MenuBar currentProfileInfo={props.profileInfo} />
        {MenuContent}
        {!props.noButtons && Button}
      </styled.Menu>
    </styled.Wrapper>
  );
};

export default connect(null, mapDispatchToProps)(memo(Menu));
