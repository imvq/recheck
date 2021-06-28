import CustomButton from 'components/shared/CustomButton';

import * as types from './types';
import * as styled from './styled';

export default (props: types.IProps) => (
  <styled.Wrapper>
    <styled.TopBar />
    <styled.BodyWrapper>
      <styled.LogoWrapper src={props.companyData.logoUrl || ''} />
      <styled.Span isEnlarged>{props.companyData.name}</styled.Span>
      <styled.ButtonWrapper>
        <CustomButton
          isDisabled={false}
          isHollow
          height='2.2rem'
          color='#33c7ba'
          onClick={() => props.setCurrentMembers(props.companyData.members)}
        >
          Посмотреть
        </CustomButton>
      </styled.ButtonWrapper>
    </styled.BodyWrapper>
  </styled.Wrapper>
);
