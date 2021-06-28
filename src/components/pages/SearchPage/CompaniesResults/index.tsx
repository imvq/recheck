import CompanyCard from 'components/shared/CompanyCard';

import * as types from './types';
import * as styled from '../styled';

export default (props: types.IProps) => {
  const CurrentCompanies = () => (
    <>
      {props.companies.slice(0, 4).map(companyData => (
        <styled.CardWrapper key={companyData.id}>
          <CompanyCard
            companyData={companyData}
            setCurrentCompany={() => {}}
            setCurrentMembers={props.setUserSearchResults}
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
        <CurrentCompanies />
      </styled.ResultsWrapper>
    </>
  );
};
