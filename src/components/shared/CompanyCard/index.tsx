import { memo } from 'react';

import CustomButton from 'components/shared/CustomButton';

import * as misc from './misc';
import * as types from './types';
import * as styled from './styled';

function CompanyCard(props: types.IProps) {
  return (
    <styled.Wrapper>
      <styled.TopBar />
      <styled.BodyWrapper>
        <styled.LogoWrapper>
          {/* Logo URL is guaranteed to be defined. */}
          <styled.Logo src={props.companyData.logoUrl as string} />
        </styled.LogoWrapper>

        <styled.Span isEnlarged>{props.companyData.name}</styled.Span>
        <styled.ButtonWrapper>
          <CustomButton
            isDisabled={!props.companyData.members.length}
            isHollow
            height='2.2rem'
            color='#33c7ba'
            onClick={() => {
              props.setCurrentMembers(misc.mergeMembersWithCompany(
                props.companyData.members,
                props.companyData
              ));
            }}
          >
            Посмотреть
          </CustomButton>
        </styled.ButtonWrapper>
      </styled.BodyWrapper>
    </styled.Wrapper>
  );
}

export default memo(CompanyCard);
