import { memo } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import ApiClient from 'commons/externals/ApiClient';
import controlledHistory from 'commons/utils/routing';

import { toastVariants } from 'commons/types/unions';
import { showToast } from 'commons/utils/misc';
import { AppState, setPageLocked, setPageUnlocked } from 'store';

import PersonCard from 'components/shared/PersonCard';

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

const Title = (
  <styled.TitleWrapper>
    <styled.Title>Выберите и оставьте отзыв о коллеге</styled.Title>
    <styled.SubTitle>С этими людьми вы работаете в одной компании</styled.SubTitle>
  </styled.TitleWrapper>
);

const NoColleaguesView = (
  <styled.NoColleaguesViewWrapper>
    Похоже, ваши коллеги еще не с нами
  </styled.NoColleaguesViewWrapper>
);

function ColleaguesView(props: types.IProps) {
  function checkIsUserAvailableForReview(targetShareableId: string) {
    props.lockPage();

    const askerProfileId = props.currentProfileInfo.currentId;

    ApiClient.checkIsUserAvailableForReview({ askerProfileId, targetShareableId })
      .then(checkData => {
        if (checkData.data.success) {
          controlledHistory.push(`/review/${targetShareableId}`);
          return;
        }

        showToast('Вы уже оставляли отзыв на этого пользователя.', toastVariants.Alert);
      }).finally(() => props.unlockPage());
  }

  const ColleaguesCards = (
    <styled.CardsWrapper>
      {props.colleaguesState.colleagues.map(colleague => (
        <styled.CardWrapper key={colleague.shareableId}>
          <PersonCard
            buttonText='Оставить отзыв'
            userData={colleague}
            onButtonClick={() => checkIsUserAvailableForReview(colleague.shareableId)}
          />
        </styled.CardWrapper>
      ))}
    </styled.CardsWrapper>
  );

  return (
    <styled.Wrapper>
      {Title}

      {props.colleaguesState.areLoaded && props.colleaguesState.colleagues.length > 0
        && ColleaguesCards}

      {props.colleaguesState.areLoaded && props.colleaguesState.colleagues.length === 0
        && NoColleaguesView}

      {/* Toast to display message in case we cannot write a review. */}
      <ToastContainer />
    </styled.Wrapper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(ColleaguesView));
