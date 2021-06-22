import CompanyCard from 'components/shared/CompanyCard';

import * as types from './types';
import * as styled from '../styled';

export default (props: types.IProps) => (
  <>
    <styled.TitleWrapper>
      <styled.Title>Рекомендации:</styled.Title>
    </styled.TitleWrapper>
    <styled.ResultsWrapper>
      {props.companies.slice(0, 4).map(companyData => (
        <styled.CardWrapper>
          <CompanyCard companyData={companyData} />
        </styled.CardWrapper>
      ))}
    </styled.ResultsWrapper>
  </>
);
