import { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import { AppState, setRecommendedCompaniesShownMembers } from 'store';
import CompanyCard from 'components/shared/CompanyCard';
import PersonCard from 'components/shared/PersonCard';
import ExpandView from '../index';

import * as types from './types';
import * as styled from '../styled';

const mapSTateToProps = (store: AppState): types.IStateProps => ({
  recommendedCompaniesShownMembers: store.search.recommendedCompaniesShownMembers
});

const mapDispatchToProps: types.IDispatchProps = {
  setRecommendedCompaniesShownMembers
};

const Companies = (props: types.IProps) => {
  const [chunk, setChunk] = useState(0);

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
            setCurrentMembers={props.setRecommendedCompaniesShownMembers}
          />
        </styled.CardWrapper>
      ))}
    </>
  );

  const CurrentMembers = () => (
    <>
      {props.recommendedCompaniesShownMembers.map(memberData => (
        <styled.CardWrapper key={Math.random()}>
          <PersonCard userData={{ ...memberData }} />
        </styled.CardWrapper>
      ))}
    </>
  );

  const closeHandler = useCallback(() => {
    setChunk(0);
    props.setRecommendedCompaniesShownMembers([]);
    props.onClose();
  }, [props.onClose]);

  return (
    <ExpandView title='Рекомендации' onClose={closeHandler}>
      {props.recommendedCompaniesShownMembers.length === 0
        ? <CurrentCompanies />
        : <CurrentMembers />}
    </ExpandView>
  );
};

export default connect(mapSTateToProps, mapDispatchToProps)(Companies);
