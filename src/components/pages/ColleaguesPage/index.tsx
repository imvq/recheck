import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { jumpTo } from 'commons/utils/misc';
import { apiClient } from 'commons/utils/services';
import { AppState, setColleagues, setPageLocked, setPageUnlocked } from 'store';

import PersonCard from 'components/shared/PersonCard';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  privateToken: store.profile.privateToken,
  colleaguesState: store.search.colleaguesState
});

const mapDispatchToProps: types.IDispatchProps = {
  setColleagues,
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

function ColleaguesPage(props: types.IProps) {
  const ColleaguesCards = (
    <styled.CardsWrapper>
      {props.colleaguesState.colleagues.map(colleague => (
        <styled.CardWrapper key={colleague.shareableId}>
          <PersonCard
            buttonText='Оставить отзыв'
            userData={colleague}
            onButtonClick={() => jumpTo('/review/', colleague.shareableId)}
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

export default connect(mapStateToProps, mapDispatchToProps)(ColleaguesPage);
