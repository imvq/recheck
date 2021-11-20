import { memo } from 'react';
import { StatusCodes } from 'http-status-codes';
import { connect } from 'react-redux';

import { ISearchedProfile } from 'commons/types';
import { jumpTo } from 'commons/utils/misc';
import { apiClient } from 'commons/utils/services';
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
  privateToken: store.profile.privateToken
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
    apiClient.checkIfUserCanBeViewed(
      props.privateToken as string,
      targetShareableId
    ).then(checkData => {
      if (checkData.data.success) {
        jumpTo('/profile/observe/', targetShareableId);
      } else {
        apiClient.checkIfUserHasViewsAvailable(props.privateToken as string)
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

  function handlePersonCardButtonClick(userData: ISearchedProfile) {
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
