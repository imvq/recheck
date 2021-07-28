import { memo, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { StatusCodes } from 'http-status-codes';

import { SearchProfileInfo } from 'utils/typing/general';
import Api from 'utils/api';
import {
  AppState,
  setCurrentObservedUser,
  setIsSearchPopupVisible,
  setPageLocked,
  setPageUnlocked,
  setRecommendedCompaniesShownMembers
} from 'store';
import CompanyCard from 'components/shared/CompanyCard';
import PersonCard from 'components/shared/PersonCard';
import ExpandView from '../index';

import * as types from './types';
import * as styled from '../styled';

const mapSTateToProps = (store: AppState): types.IStateProps => ({
  currentProfileInfo: store.profile.currentProfileInfo,
  recommendedCompaniesShownMembers: store.search.recommendedCompaniesShownMembers
});

const mapDispatchToProps: types.IDispatchProps = {
  lockPage: setPageLocked,
  unlockPage: setPageUnlocked,
  setIsSearchPopupVisible,
  setCurrentObservedUser,
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

  const requestReviewsAmount = (targetShareableId: string) => {
    Api.getTargetNReviewsGot({
      askerProfileId: props.currentProfileInfo.currentId,
      targetShareableId
    }).then(amountData => {
      // TODO: show profile.
    }).catch(error => {
      if (error.response && error.response.status === StatusCodes.FORBIDDEN) {
        props.setIsSearchPopupVisible(true);
      }
    }).finally(() => props.unlockPage());
  };

  const handlePersonCardButtonClick = (userData: SearchProfileInfo) => {
    props.lockPage();
    props.setCurrentObservedUser(userData);
    requestReviewsAmount(userData.shareableId);
  };

  const CurrentCompanies = props.recommendations.map(company => (
    <styled.CardWrapper key={company.id}>
      <CompanyCard
        companyData={company}
        setCurrentMembers={props.setRecommendedCompaniesShownMembers}
      />
    </styled.CardWrapper>
  ));

  const CurrentMembers = props.recommendedCompaniesShownMembers.map(memberData => (
    <styled.CardWrapper key={memberData.shareableId}>
      <PersonCard
        buttonText='Посмотреть'
        onButtonClick={() => handlePersonCardButtonClick(memberData)}
        userData={memberData}
      />
    </styled.CardWrapper>
  ));

  const closeHandler = useCallback(() => {
    setChunk(0);
    props.setRecommendedCompaniesShownMembers([]);
    props.onClose();
  }, []);

  return (
    <ExpandView title='Рекомендации' onClose={closeHandler}>
      {props.recommendedCompaniesShownMembers.length === 0
        ? <>{ CurrentCompanies }</>
        : <>{ CurrentMembers }</>}
    </ExpandView>
  );
};

export default connect(mapSTateToProps, mapDispatchToProps)(memo(Companies));
