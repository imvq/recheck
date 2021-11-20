import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ScaleStage2 from 'assets/images/pages/RegistrationPage/ScaleStage2.png';

import { jumpTo } from 'commons/utils/misc';
import { apiClient } from 'commons/utils/services';
import { IUserPreparationData } from 'commons/types';
import { AppState } from 'store';

import RegistrationBox from './RegistrationBox';
import ConfirmationPopup from './ConfirmationPopup';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  socialId: store.profile.socialId
});

function RegistrationPage(props: types.IProps) {
  // Registration page is suppose to accept users who are not authorized yet
  // because they cannot be authorized before they become registered.
  // However, only those users who passed social network authorization are allowed to be registered.
  // Therefore, we have to filter and redirect home those who don't have a social ID stored.
  useEffect(() => {
    if (!props.socialId) {
      jumpTo('/');
    }
  });

  // When user press registretion button
  // we must show a popup telling that they must check their email.
  // For that purpose we need email to show in the popup and flag
  // defining that the popup must be visualized.
  const [emailToShow, setEmailToShow] = useState('');
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  function prepareUser(userPreparationData: IUserPreparationData) {
    apiClient.prepareUser(userPreparationData)
      .finally(() => {
        setEmailToShow(userPreparationData.email);
        setIsConfirmationVisible(true);
      });
  }

  return (
    <styled.Wrapper>
      {/* Absolute-positioned confirmation popup. */}
      {isConfirmationVisible && <ConfirmationPopup email={emailToShow} />}

      <styled.AdaptedHeader isProfilePageAvailable={false} />
      <styled.ContentWrapper>
        <styled.StageBreadcrumpWrapper>
          <styled.StageBreadcrumpImage src={ScaleStage2} draggable='false' />
        </styled.StageBreadcrumpWrapper>

        <RegistrationBox onRegisterButtonPressed={prepareUser} />
      </styled.ContentWrapper>
      <styled.AdaptedFooter />
    </styled.Wrapper>
  );
}

export default connect(mapStateToProps)(RegistrationPage);
