import { useState, useCallback } from 'react';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import { Company, UserCardData } from 'utils/typing/general';
import CompanyCard from 'components/shared/CompanyCard';
import PersonCard from 'components/shared/PersonCard';
import ExpandView from '../index';

import * as types from './types';
import * as styled from '../styled';

export default (props: types.IProps) => {
  const [chunk, setChunk] = useState(0);
  const [currentCompany, setCurrentCompany] = useState<Company>();
  const [currentMembers, setCurrentMembers] = useState<UserCardData[]>([]);

  const loadNewChunk = () => {
    props.loadNextChunkCallback(chunk + 1);
    setChunk(chunk + 1);
  };

  useBottomScrollListener(loadNewChunk, {
    offset: 100,
    debounce: 2000
  });

  const CurrentCompanies = () => (
    <>
      {props.recommendations.map(company => (
        <styled.CardWrapper key={company.id}>
          <CompanyCard
            companyData={company}
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
        <styled.CardWrapper key={memberData.email}>
          <PersonCard userData={{
            company: currentCompany?.name || '',
            ...memberData
          }}
          />
        </styled.CardWrapper>
      ))}
    </>
  );

  const closeHandler = useCallback(() => {
    setChunk(0);
    props.onClose();
  }, [props.onClose]);

  return (
    <ExpandView title='Рекомендации' onClose={closeHandler}>
      {currentMembers.length === 0 ? <CurrentCompanies /> : <CurrentMembers />}
    </ExpandView>
  );
};
