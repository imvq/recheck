import { connect } from 'react-redux';

import controlledHistory from 'utils/routing';
import { setPageLocked, setPageUnlocked } from 'store';
import Api from 'utils/api';
import ScaleStage2 from 'assets/images/pages/RegistrationPage/ScaleStage2.png';
import RegistrationBox from './RegistrationBox';

import * as types from './types';
import * as styled from './styled';

const mapDispatchToProps: types.IDispatchProps = {
  lockPage: setPageLocked,
  unlockPage: setPageUnlocked
};

const RegistrationPage = (props: types.IProps) => (
  <styled.Wrapper>
    <styled.AdaptedHeader />
    <styled.ContentWrapper>
      <styled.StageBreadcrumpWrapper>
        <styled.StageBreadcrumpImage src={ScaleStage2} draggable='false' />
      </styled.StageBreadcrumpWrapper>
      <RegistrationBox onProceed={(profileInfo) => {
        props.lockPage();
        Api.prepareProfile(profileInfo)
          .then(() => controlledHistory.replace('/await-user-confirmation'))
          .finally(() => props.unlockPage());
      }}
      />
    </styled.ContentWrapper>
    <styled.AdaptedFooter />
  </styled.Wrapper>
);

export default connect(null, mapDispatchToProps)(RegistrationPage);
