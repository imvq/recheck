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
  const MenuContent = () => (
    <styled.MenuContent>
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
        <MenuBar currentProfileInfo={props.currentProfileInfo} />
        <MenuContent />
        <styled.ButtonWrapper>
          <CustomButton
            height='2.3rem'
            isDisabled={false}
            onClick={() => {
              props.setCurrentMainToolbarEntry(MainToolbarEntry.NewSearch);
              controlledHistory.push('/search');
            }}
          >
            Новый поиск
          </CustomButton>
        </styled.ButtonWrapper>
      </styled.Menu>
    </styled.Wrapper>
  );
};

export default memo(connect(null, mapDispatchToProps)(Menu));