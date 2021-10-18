import { useState } from 'react';

import ScaleStage2 from 'assets/images/pages/RegistrationPage/ScaleStage2.png';

import RegistrationBox from './RegistrationBox';
import ConfirmationPopup from './ConfirmationPopup';

import * as misc from './misc';
import * as styled from './styled';

const Title = (
  <styled.StageBreadcrumpWrapper>
    <styled.StageBreadcrumpImage src={ScaleStage2} draggable='false' />
  </styled.StageBreadcrumpWrapper>
);

function RegistrationPage() {
  // When user press registretion button
  // we must show a popup telling that they must check their email.
  // For that purpose we need email to show in the popup and flag
  // defining that the popup must be visualized.
  const [emailToShow, setEmailToShow] = useState('');
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  const Content = (
    <RegistrationBox onProceed={userPreparationData => {
      misc.proceedHandler(userPreparationData)
        .finally(() => {
          setEmailToShow(userPreparationData.email);
          setIsConfirmationVisible(true);
        });
    }}
    />
  );

  return (
    <styled.Wrapper>
      {/* Absolute-positioned confirmation popup. */}
      {isConfirmationVisible && <ConfirmationPopup email={emailToShow} />}

      <styled.AdaptedHeader isProfilePageAvailable={false} />
      <styled.ContentWrapper>
        {Title}
        {Content}
      </styled.ContentWrapper>
      <styled.AdaptedFooter />
    </styled.Wrapper>
  );
}

export default RegistrationPage;
