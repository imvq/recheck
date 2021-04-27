import { connect } from 'react-redux';

import controlledHistory from 'utils/routing';
import { setPageLocked, setPageUnlocked } from 'store';
import Api from 'utils/api';
import ScaleStage2 from 'assets/images/pages/RegistrationPage/ScaleStage2.png';
import { IProps, IDispatchProps } from './types';
import {
  Wrapper, AdaptedHeader, AdaptedFooter,
  ContentWrapper, StageBreadcrumpWrapper, StageBreadcrumpImage
} from './styled';
import RegistrationBox from './RegistrationBox';

const mapDispatchToProps: IDispatchProps = {
  lockPage: setPageLocked,
  unlockPage: setPageUnlocked
};

const RegistrationPage = (props: IProps) => (
  <Wrapper>
    <AdaptedHeader />
    <ContentWrapper>
      <StageBreadcrumpWrapper>
        <StageBreadcrumpImage src={ScaleStage2} draggable='false' />
      </StageBreadcrumpWrapper>
      <RegistrationBox onProceed={(profileInfo) => {
        props.lockPage();
        Api.prepareProfile(profileInfo)
          .then(() => controlledHistory.replace('/search'))
          .finally(() => props.unlockPage());
      }}
      />
    </ContentWrapper>
    <AdaptedFooter />
  </Wrapper>
);

export default connect(null, mapDispatchToProps)(RegistrationPage);
