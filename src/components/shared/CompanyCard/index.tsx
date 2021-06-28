import CustomButton from 'components/shared/CustomButton';

import * as types from './types';
import * as styled from './styled';

export default (props: types.IProps) => (
  <styled.Wrapper>
    <styled.TopBar />
    <styled.BodyWrapper>
      <styled.LogoWrapper>
        <styled.Logo src={props.companyData.logoUrl || ''} />
      </styled.LogoWrapper>

      <styled.Span isEnlarged>{props.companyData.name}</styled.Span>
      <styled.ButtonWrapper>
        <CustomButton
          isDisabled={!props.companyData.members.length}
          isHollow
          height='2.2rem'
          color='#33c7ba'
          onClick={() => {
            props.setCurrentCompany(props.companyData);
            props.setCurrentMembers(props.companyData.members);
          }}
        >
          Посмотреть
        </CustomButton>
      </styled.ButtonWrapper>
    </styled.BodyWrapper>
  </styled.Wrapper>
);
