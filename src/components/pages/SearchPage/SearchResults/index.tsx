import { memo } from 'react';
import { connect } from 'react-redux';
import { StatusCodes } from 'http-status-codes';

import { ISearchProfileInfo } from 'commons/types/general';
import controlledHistory from 'commons/utils/routing';
import ApiClient from 'commons/externals/ApiClient';
import {
  AppState,
  setCurrentObservedUser,
  setIsSearchPopupVisible,
  setPageLocked,
  setPageUnlocked,
  setRequestedUserShareableId
} from 'store';
import PersonCard from 'components/shared/PersonCard';

import * as types from './types';
import * as styled from '../styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentProfileInfo: store.profile.currentProfileInfo
});

const mapDispatchToProps: types.IDispatchProps = {
  lockPage: setPageLocked,
  unlockPage: setPageUnlocked,
  setIsSearchPopupVisible,
  setCurrentObservedUser,
  setRequestedUserShareableId
};

const SearchResults = (props: types.IProps) => {
  const requestReviewsAmount = (targetShareableId: string) => {
    ApiClient.getTargetNReviewsGot({
      askerProfileId: props.currentProfileInfo.currentId,
      targetShareableId
    }).then(amountData => {
      controlledHistory.push(`/profile/observe/${targetShareableId}`);
    }).catch(error => {
      if (error.response && error.response.status === StatusCodes.FORBIDDEN) {
        props.setRequestedUserShareableId(targetShareableId);
        props.setIsSearchPopupVisible(true);
      }
    }).finally(() => props.unlockPage());
  };

  const handlePersonCardButtonClick = (userData: ISearchProfileInfo) => {
    props.lockPage();
    props.setCurrentObservedUser(userData);
    requestReviewsAmount(userData.shareableId);
  };

  return (
    <>
      <styled.TitleWrapper>
        <styled.Title>Результат поиска:</styled.Title>
      </styled.TitleWrapper>

      <styled.ResultsWrapper>
        {props.userSearchResults.map(userData => (
          <styled.CardWrapper key={userData.shareableId}>
            <PersonCard
              buttonText='Посмотреть'
              onButtonClick={() => handlePersonCardButtonClick(userData)}
              userData={userData}
            />
          </styled.CardWrapper>
        ))}
      </styled.ResultsWrapper>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(SearchResults));
