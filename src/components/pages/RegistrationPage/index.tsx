import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as store from 'store';

import ScaleStage2 from 'assets/images/pages/RegistrationPage/ScaleStage2.png';

import { jumpTo } from 'commons/utils/misc';
import { apiClient } from 'commons/utils/services';
import { IUserPreparationData } from 'commons/types';

import RegistrationBox from './RegistrationBox';
import ConfirmationPopup from './ConfirmationPopup';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (state: store.AppState): types.IStateProps => ({
  isRedirectedFromOrigin: store.getIsRedirectedFromOrigin(state),
  isAuthenticated: store.getIsUserAuthenticated(state)
});

const mapDispatchToProps: types.IDispatchProps = {
  setIsRedirectedFromOrigin: store.setIsRedirectedFromOrigin
};

function RegistrationPage(props: types.IProps) {
  useEffect(() => {
    // If a user entered the page by typing the link directly
    // it must be redirected away.
    if (!props.isRedirectedFromOrigin) {
      jumpTo('/');
      return;
    }

    // If a user is redirected to the page 'legally'
    // we must set the flag to its default value.
    props.setIsRedirectedFromOrigin(false);
  }, []);

  // When user press registration button
  // we must show a popup telling that they must check their email.
  // For that purpose we need email to show in the popup and flag
  // defining that the popup must be visualized.
  const [emailToShow, setEmailToShow] = useState('');
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  function prepareUser(userPreparationData: IUserPreparationData) {
    apiClient.prepareUser(userPreparationData)
      .then(() => {
        setEmailToShow(userPreparationData.email);
        setIsConfirmationVisible(true);
      });
  }

  // We cannot allow to show the registration page untill we got
  // the confirmation that the user is authenticated and we have their social ID.
  //
  // PageAccessGuard is responsible for redirecting those users who are not authenticated.
  // However, the page can be loaded before the authentication check is passed.
  // Therefore, we must hide the registration page content by the time we pass all checks.
  return props.isAuthenticated ? (
    <styled.Wrapper>
      <styled.AdaptedHeader isProfilePageAvailable={false} />
      <styled.ContentWrapper>
        <styled.StageBreadcrumpWrapper>
          <styled.StageBreadcrumpImage src={ScaleStage2} draggable='false' />
        </styled.StageBreadcrumpWrapper>

        <RegistrationBox onRegisterButtonPressed={prepareUser} />
      </styled.ContentWrapper>
      <styled.AdaptedFooter />

      {/* Absolute-positioned confirmation popup. */}
      {isConfirmationVisible && <ConfirmationPopup email={emailToShow} />}
    </styled.Wrapper>
  ) : null;
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
