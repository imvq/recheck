import { memo } from 'react';

import CompanyCard from 'components/shared/CompanyCard';

import * as types from './types';
import * as styled from '../styled';

function CompaniesResults(props: types.IProps) {
  const Title = (
    <styled.TitleWrapper>
      <styled.Title>Рекомендации:</styled.Title>
    </styled.TitleWrapper>
  );

  const CurrentCompanies = props.companies.slice(0, 4).map(companyData => (
    <styled.CardWrapper key={companyData.id}>
      <CompanyCard
        companyData={companyData}
        setCurrentMembers={props.setUserSearchResults}
      />
    </styled.CardWrapper>
  ));

  const CompaniesSection = (
    <styled.ResultsWrapper>
      {CurrentCompanies}
    </styled.ResultsWrapper>
  );

  return (
    <>
      {Title}
      {CompaniesSection}
    </>
  );
}

export default memo(CompaniesResults);
