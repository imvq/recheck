import { memo } from 'react';
import { StatusCodes } from 'http-status-codes';
import { connect } from 'react-redux';

import ApiClient from 'commons/externals/ApiClient';

import { ISearchProfileInfo } from 'commons/types/general';
import { jumpTo } from 'commons/utils/misc';
import {
  AppState,
  setIsSearchPopupVisible,
  setIsSpendFreeViewPopupVisible,
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
  setIsSpendFreeViewPopupVisible,
  setRequestedUserShareableId
};

function SearchResults(props: types.IProps) {
  function processTarget(targetShareableId: string) {
    ApiClient.checkIsUserCanBeViewed({
      askerProfileId: props.currentProfileInfo.currentId,
      targetShareableId
    }).then(checkData => {
      if (checkData.data.success) {
        jumpTo('/profile/observe/', targetShareableId);
      } else {
        ApiClient.doesUserHasAvailableProfilesViews(props.currentProfileInfo.currentId)
          .then(viewsAvailabilityData => {
            if (viewsAvailabilityData.data.success) {
              props.setIsSpendFreeViewPopupVisible(true);
            } else {
              props.setIsSearchPopupVisible(true);
            }
          })
          .finally(props.unlockPage);
      }
    }).catch(error => {
      // Any other errors are not meant to be seen while using the website interface.
      if (error.response && error.response.status === StatusCodes.FORBIDDEN) {
        props.setIsSearchPopupVisible(true);
      }
    }).finally(() => props.unlockPage());
  }

  function handlePersonCardButtonClick(userData: ISearchProfileInfo) {
    props.lockPage();
    props.setRequestedUserShareableId(userData.shareableId);
    processTarget(userData.shareableId);
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
