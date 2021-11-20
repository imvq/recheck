import { memo, useState, useCallback } from 'react';
import { StatusCodes } from 'http-status-codes';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
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
  setRecommendedCompaniesShownMembers,
  setRequestedUserShareableId
} from 'store';
import { getRecommendedCompaniesShownMembersWithoutSelf } from 'store/selectors';

import CompanyCard from 'components/shared/CompanyCard';
import PersonCard from 'components/shared/PersonCard';

import ExpandView from '../index';

import * as types from './types';
import * as styled from '../styled';

const mapSTateToProps = (store: AppState): types.IStateProps => ({
  privateToken: store.profile.privateToken,
  shareableId: store.profile.shareableId,
  recommendedCompaniesShownMembers: getRecommendedCompaniesShownMembersWithoutSelf(store)
});

const mapDispatchToProps: types.IDispatchProps = {
  lockPage: setPageLocked,
  unlockPage: setPageUnlocked,
  setIsSearchPopupVisible,
  setIsSpendFreeViewPopupVisible,
  setRecommendedCompaniesShownMembers,
  setRequestedUserShareableId
};

function Companies(props: types.IProps) {
  const [chunk, setChunk] = useState(0);

  const loadNewChunk = () => {
    props.loadNextChunkCallback(chunk + 1);
    setChunk(chunk + 1);
  };

  useBottomScrollListener(loadNewChunk, {
    offset: 100,
    debounce: 2000
  });

  function requestReviewsAmount(targetShareableId: string) {
    apiClient.checkIfUserCanBeViewed(props.privateToken as string, targetShareableId)
      .then(checkData => {
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
      }).finally(props.unlockPage);
  }

  function handlePersonCardButtonClick(userData: ISearchedProfile) {
    props.lockPage();
    props.setRequestedUserShareableId(userData.shareableId);
    requestReviewsAmount(userData.shareableId);
  }

  const CurrentCompanies = props.recommendations.map(company => (
    <styled.CardWrapper key={company.id}>
      <CompanyCard
        companyData={company}
        setCurrentMembers={props.setRecommendedCompaniesShownMembers}
      />
    </styled.CardWrapper>
  ));

  const CurrentMembers = props.recommendedCompaniesShownMembers
    .filter(member => member.shareableId !== props.shareableId)
    .map(memberData => (
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
}

export default connect(mapSTateToProps, mapDispatchToProps)(memo(Companies));
