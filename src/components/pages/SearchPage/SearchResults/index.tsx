import { memo } from 'react';

import PersonCard from 'components/shared/PersonCard';

import * as types from './types';
import * as styled from '../styled';

export default memo((props: types.IProps) => (
  <>
    <styled.TitleWrapper>
      <styled.Title>Результат поиска:</styled.Title>
    </styled.TitleWrapper>

    <styled.ResultsWrapper>
      {props.userSearchResults.results.map(userData => (
        <styled.CardWrapper key={Math.random()}>
          <PersonCard userData={userData} />
        </styled.CardWrapper>
      ))}
    </styled.ResultsWrapper>
  </>
));
