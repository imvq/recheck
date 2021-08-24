import { memo } from 'react';
import { connect } from 'react-redux';

import ApiClient from 'commons/externals/ApiClient';
import controlledHistory from 'commons/utils/routing';

import { AppState, setIsSearchPopupVisible, setIsSpendFreeViewPopupVisible, setTargetShareableId } from 'store';

import CustomButton from 'components/shared/CustomButton';

import * as types from './types';
import * as styled from '../Popups/styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentProfileInfo: store.profile.currentProfileInfo,
  requestedUserShareableId: store.interaction.requestedUserShareableId
});

const mapDispatchToProps: types.IDispatchProps = {
  setVisible: setIsSpendFreeViewPopupVisible,
  setIsSearchPopupVisible
};

const TitleWrapper = (
  <styled.BodyWrapper>
    <styled.Title>У вас есть непотраченные просмотры:</styled.Title>
  </styled.BodyWrapper>
);

function SpendFreeViewsPopup(props: types.IProps) {
  function switchToSearchPopup() {
    props.setVisible(false);
    props.setIsSearchPopupVisible(true);
  }

  function handleProceed() {
    ApiClient.makeUserAvailable({
      askerProfileId: props.currentProfileInfo.currentId,
      targetShareableId: props.requestedUserShareableId as string
    }).then(responseDto => {
      if (responseDto.data.success) {
        controlledHistory.push(`/profile/observe/${props.requestedUserShareableId}`);
      }
    }).finally(() => props.setVisible(false));
  }

  const TopWrapper = (
    <styled.TopWrapper>
      <styled.AdaptedCloseCross onClick={() => props.setVisible(false)} />
    </styled.TopWrapper>
  );

  const SpendSection = (
    <styled.OptionGroupWrapper>
      <styled.ButtonWrapper>
        <CustomButton isDisabled={props.requestedUserShareableId === null} onClick={handleProceed}>
          Потратить сейчас
        </CustomButton>
      </styled.ButtonWrapper>
    </styled.OptionGroupWrapper>
  );

  const DiscardSection = (
    <styled.OptionGroupWrapper>
      <styled.ButtonWrapper>
        <CustomButton isDisabled={false} onClick={switchToSearchPopup}>
          Посмотреть другие опции
        </CustomButton>
      </styled.ButtonWrapper>
    </styled.OptionGroupWrapper>
  );

  return (
    <styled.Wrapper>
      <styled.Frame>
        {TopWrapper}
        {TitleWrapper}

        <styled.OptionsWrapper>
          {SpendSection}
          {DiscardSection}
        </styled.OptionsWrapper>
      </styled.Frame>

      <styled.ClickableBackground onClick={() => props.setVisible(false)} />
    </styled.Wrapper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(SpendFreeViewsPopup));
