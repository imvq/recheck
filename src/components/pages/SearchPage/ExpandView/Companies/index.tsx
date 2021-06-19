import CompanyCard from 'components/shared/CompanyCard';
import ExpandView from '../index';

import * as types from './types';
import * as styled from '../styled';

export default (props: types.IProps) => (
  <ExpandView title='Рекомендации' onClose={props.onClose}>
    {props.recommendations.map(company => (
      <styled.CardWrapper>
        <CompanyCard companyData={company} />
      </styled.CardWrapper>
    ))}
  </ExpandView>
);
