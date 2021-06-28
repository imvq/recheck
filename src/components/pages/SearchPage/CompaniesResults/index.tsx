import { useState } from 'react';

import { Company, UserCardData } from 'utils/typing/general';
import CompanyCard from 'components/shared/CompanyCard';
import PersonCard from 'components/shared/PersonCard';

import * as types from './types';
import * as styled from '../styled';

export default (props: types.IProps) => {
  const [currentCompany, setCurrentCompany] = useState<Company>();
  const [currentMembers, setCurrentMembers] = useState<UserCardData[]>([]);

  const CurrentCompanies = () => (
    <>
      {props.companies.slice(0, 4).map(companyData => (
        <styled.CardWrapper>
          <CompanyCard
            companyData={companyData}
            setCurrentCompany={setCurrentCompany}
            setCurrentMembers={setCurrentMembers}
          />
        </styled.CardWrapper>
      ))}
    </>
  );

  const CurrentMembers = () => (
    <>
      {currentMembers.map(memberData => (
        <styled.CardWrapper>
          <PersonCard userData={{
            company: currentCompany?.name || '',
            ...memberData
          }}
          />
        </styled.CardWrapper>
      ))}
    </>
  );

  return (
    <>
      <styled.TitleWrapper>
        <styled.Title>Рекомендации:</styled.Title>
      </styled.TitleWrapper>
      <styled.ResultsWrapper>
        {currentMembers.length !== 0 && <CurrentMembers />}
        <CurrentCompanies />
      </styled.ResultsWrapper>
    </>
  );
};
