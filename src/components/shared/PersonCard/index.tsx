import { connect } from 'react-redux';

import { setCurrentMainToolbarEntry, setIsSearchPopupVisible } from 'store';
import { MainToolbarEntry } from 'utils/enums';
import CustomButton from 'components/shared/CustomButton';

import * as types from './types';
import * as styled from './styled';

const mapDispatchToProps: types.IDispatchProps = {
  setCurrentMainToolbarEntry,
  setIsSearchPopupVisible
};

const PersonCard = (props: types.IProps) => (
  <styled.Wrapper>
    <styled.TopBar />
    <styled.BodyWrapper>
      <styled.PhotoWrapper src={props.userData.photoUrl || ''} />
      <styled.Span isEnlarged>{props.userData.name}</styled.Span>
      <styled.Span isDimmed>{`${props.userData.position} — ${props.userData.company}`}</styled.Span>
      <styled.ButtonWrapper>
        <CustomButton
          isDisabled={false}
          isHollow
          height='2.2rem'
          color='#33c7ba'
          onClick={() => {
            props.setCurrentMainToolbarEntry(MainToolbarEntry.NewReview);
            props.setIsSearchPopupVisible(true);
          }}
        >
          Посмотреть
        </CustomButton>
      </styled.ButtonWrapper>
    </styled.BodyWrapper>
  </styled.Wrapper>
);

export default connect(null, mapDispatchToProps)(PersonCard);
