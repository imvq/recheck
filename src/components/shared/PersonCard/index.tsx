import { memo } from 'react';
import { connect } from 'react-redux';

import Api from 'utils/api';
import {
  AppState,
  setCurrentMainToolbarEntry,
  setCurrentObservedUser,
  setIsSearchPopupVisible,
  setPageLocked,
  setPageUnlocked
} from 'store';
import CustomButton from 'components/shared/CustomButton';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentProfileInfo: store.profile.currentProfileInfo
});

const mapDispatchToProps: types.IDispatchProps = {
  lockPage: setPageLocked,
  unlockPage: setPageUnlocked,
  setCurrentMainToolbarEntry,
  setIsSearchPopupVisible,
  setCurrentObservedUser
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
            props.lockPage();
            props.setCurrentObservedUser(props.userData);

            Api.getTargetNReviewsGot({
              askerProfileId: props.currentProfileInfo.currentId,
              targetShareableId: props.userData.shareableId
            })
              .then(amountData => {
                // TODO: show profile.
              })
              .catch((error) => {
                if (error.response && error.response.status === 403) {
                  props.setIsSearchPopupVisible(true);
                }
              })
              .finally(() => props.unlockPage());
          }}
        >
          Посмотреть
        </CustomButton>
      </styled.ButtonWrapper>
    </styled.BodyWrapper>
  </styled.Wrapper>
);

export default connect(mapStateToProps, mapDispatchToProps)(memo(PersonCard));
