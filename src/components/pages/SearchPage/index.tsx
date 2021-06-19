import { useEffect } from 'react';
import { connect } from 'react-redux';

import { AppState, loadRecommendations, searchUser, setPageLocked } from 'store';
import PersonCard from 'components/shared/PersonCard';
import SearchField from './SearchField';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  userSearchResults: store.search.userSearchResults
});

const mapDispatchToProps: types.IDispatchProps = {
  loadRecommendations,
  searchUser,
  lockPage: setPageLocked
};

const SearchPage = (props: types.IProps) => {
  useEffect(() => { props.loadRecommendations(); }, []);

  return (
    <styled.Wrapper>
      <styled.Sidebar />

      <styled.AdaptedHeader />

      <styled.ContentWrapper>
        <SearchField lockPageCallback={props.lockPage} searchUserCallback={props.searchUser} />
        <styled.TitleWrapper><styled.Title>Результат поиска:</styled.Title></styled.TitleWrapper>
        <styled.ResultsWrapper>
          {props.userSearchResults.results.length
            ? props.userSearchResults.results.map(userData => (
              <styled.PersonCardWrapper>
                <PersonCard userData={userData} />
              </styled.PersonCardWrapper>
            ))
            : <styled.SpanWrapper><styled.Span>Результатов нет</styled.Span></styled.SpanWrapper>}
        </styled.ResultsWrapper>
      </styled.ContentWrapper>

      <styled.AdaptedFooter />

    </styled.Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
