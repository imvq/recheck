import { memo } from 'react';
import { StatusCodes } from 'http-status-codes';
import { connect } from 'react-redux';

import ApiClient from 'commons/externals/ApiClient';
import controlledHistory from 'commons/utils/routing';

import { ISearchProfileInfo } from 'commons/types/general';

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

function SearchResults(props: types.IProps) {
  function requestReviewsAmount(targetShareableId: string) {
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
  }

  function handlePersonCardButtonClick(userData: ISearchProfileInfo) {
    props.lockPage();
    props.setCurrentObservedUser(userData);
    requestReviewsAmount(userData.shareableId);
  }

  const Title = (
    <styled.TitleWrapper>
      <styled.Title>Результат поиска:</styled.Title>
    </styled.TitleWrapper>
  );

  const Results = (
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
  );

  return (
    <>
      {Title}
      {Results}
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(SearchResults));
