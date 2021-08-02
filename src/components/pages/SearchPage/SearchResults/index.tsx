import { memo } from 'react';
import { connect } from 'react-redux';
import { StatusCodes } from 'http-status-codes';

import { ISearchProfileInfo } from 'utils/typing/general';
import Api from 'utils/api';
import {
  AppState,
  setCurrentObservedUser,
  setIsSearchPopupVisible,
  setPageLocked,
  setPageUnlocked
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
  setCurrentObservedUser
};

const SearchResults = (props: types.IProps) => {
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
