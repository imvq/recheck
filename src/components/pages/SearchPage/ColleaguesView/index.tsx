import { memo } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import ApiClient from 'commons/externals/ApiClient';
import controlledHistory from 'commons/utils/routing';
import { toastVariants } from 'commons/types/unions';
import { showToast } from 'commons/utils/functions';
import { AppState, setPageLocked, setPageUnlocked } from 'store';

import PersonCard from 'components/shared/PersonCard';
import NoColleaguesView from './NoColleaguesView';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  colleaguesState: store.search.colleaguesState,
  currentProfileInfo: store.profile.currentProfileInfo
});

const mapDispatchToProps: types.IDispatchProps = {
  lockPage: setPageLocked,
  unlockPage: setPageUnlocked
};

export const ColleaguesView = (props: types.IProps) => {
  const checkIsUserAvailableForReview = (askerProfileId: string, targetShareableId: string) => {
    props.lockPage();

    ApiClient.checkIsUserAvailableForReview({ askerProfileId, targetShareableId })
      .then(checkData => {
        if (checkData.data.success) {
          controlledHistory.push(`/review/${targetShareableId}`);
        } else {
          showToast('Вы уже оставляли отзыв на этого пользователя.', toastVariants.Alert);
        }
      }).finally(() => props.unlockPage());
  };

  return (
    <styled.Wrapper>
      <styled.TitleWrapper>
        <styled.Title>Выберите и оставьте отзыв о коллеге</styled.Title>
        <styled.SubTitle>С этими людьми вы работаете в одной компании</styled.SubTitle>
      </styled.TitleWrapper>

      {props.colleaguesState.areLoaded && props.colleaguesState.colleagues.length > 0 && (
        <styled.CardsWrapper>
          {props.colleaguesState.colleagues.map(colleague => (
            <styled.CardWrapper key={colleague.shareableId}>
              <PersonCard
                buttonText='Оставить отзыв'
                userData={colleague}
                onButtonClick={() => {
                  checkIsUserAvailableForReview(
                    props.currentProfileInfo.currentId,
                    colleague.shareableId
                  );
                }}
              />
            </styled.CardWrapper>
          ))}
        </styled.CardsWrapper>
      )}

      {props.colleaguesState.areLoaded && props.colleaguesState.colleagues.length === 0 && (
        <NoColleaguesView />
      )}

      {/* Toast to display message in case we cannot write a review. */}
      <ToastContainer />
    </styled.Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(ColleaguesView));
