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
  const [email, setEmail] = useState('');
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  const Content = (
    <RegistrationBox onProceed={profileInfo => misc.proceedHandler(
      profileInfo,
      setEmail,
      setIsConfirmationVisible
    )}
    />
  );

  return (
    <styled.Wrapper>
      {/* Absolute-positioned confirmation popup. */}
      {isConfirmationVisible && <ConfirmationPopup email={email} />}

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
