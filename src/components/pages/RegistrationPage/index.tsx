import { useState } from 'react';

import ApiClient from 'commons/externals/ApiClient';
import ScaleStage2 from 'assets/images/pages/RegistrationPage/ScaleStage2.png';
import RegistrationBox from './RegistrationBox';
import ConfirmationPopup from './ConfirmationPopup';

import * as styled from './styled';

export default () => {
  const [email, setEmail] = useState('');
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  return (
    <styled.Wrapper>
      {/* Absolute-positioned confirmation popup. */}
      {isConfirmationVisible && <ConfirmationPopup email={email} />}

      <styled.AdaptedHeader isProfilePageAvailable={false} />
      <styled.ContentWrapper>
        <styled.StageBreadcrumpWrapper>
          <styled.StageBreadcrumpImage src={ScaleStage2} draggable='false' />
        </styled.StageBreadcrumpWrapper>
        <RegistrationBox onProceed={profileInfo => {
          setEmail(profileInfo.email);
          ApiClient.prepareProfile(profileInfo).finally(() => {
            setIsConfirmationVisible(true);
          });
        }}
        />
      </styled.ContentWrapper>
      <styled.AdaptedFooter />
    </styled.Wrapper>
  );
};
