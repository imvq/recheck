import { useState } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import CompanyCard from 'components/shared/CompanyCard';

import * as types from './types';
import * as styled from '../styled';

export default (props: types.IProps) => {
  const [chunk, setChunk] = useState(0);

  const loadNewChunk = () => {
    props.loadNextChunkCallback(chunk);
    setChunk(chunk + 1);
  };

  useBottomScrollListener(loadNewChunk, {
    offset: 100,
    debounce: 1000
  });

  return (
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
};
