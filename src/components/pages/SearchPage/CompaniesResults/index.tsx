import { useState } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import { UserCardData } from 'utils/typing/general';
import CompanyCard from 'components/shared/CompanyCard';
import PersonCard from 'components/shared/PersonCard';

import * as types from './types';
import * as styled from '../styled';

export default (props: types.IProps) => {
  const [chunk, setChunk] = useState(0);
  const [currentMembers, setCurrentMembers] = useState<UserCardData[]>([]);

  const loadNewChunk = () => {
    props.loadNextChunkCallback(chunk);
    setChunk(chunk + 1);
  };

  useBottomScrollListener(loadNewChunk, {
    offset: 100,
    debounce: 1000
  });

  const CurrentCompanies = () => (
    <>
      {props.companies.slice(0, 4).map(companyData => (
        <styled.CardWrapper>
          <CompanyCard companyData={companyData} setCurrentMembers={setCurrentMembers} />
        </styled.CardWrapper>
      ))}
    </>
  );

  const CurrentMembers = () => (
    <>
      {currentMembers.map(memberData => (
        <styled.CardWrapper>
          <PersonCard userData={memberData} />
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
        {currentMembers.length === 0 ? <CurrentCompanies /> : null}
      </styled.ResultsWrapper>
    </>
  );
};
