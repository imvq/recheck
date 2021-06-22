import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { connect } from 'react-redux';

import { AppState, loadRecommendations, searchUser, setPageLocked } from 'store';

import SearchField from './SearchField';
import CompaniesResults from './CompaniesResults';
import CompaniesPopup from './ExpandView/Companies';
import CompaniesExpansionLabel from './CompaniesExpansionLabel';
import SearchResults from './SearchResults';
import SearchNoResults from './SearchNoResults';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  recommendations: store.search.recommendations,
  userSearchResults: store.search.userSearchResults
});

const mapDispatchToProps: types.IDispatchProps = {
  loadRecommendations,
  searchUser,
  lockPage: setPageLocked
};

const SearchPage = (props: types.IProps) => {
  const [isRecommendationsViewVisible, setIsRecommendationsViewVisible] = useState(false);

  useEffect(() => { props.loadRecommendations(); }, []);

  // Don't show anything until the user starts its search.
  // If the user search request returned empty list than show
  // a 'no results' label.
  const [isFirstSearch, setIsFirstSearch] = useState(true);
  const firstRender = useRef(true);
  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      setIsFirstSearch(false);
    }
  }, [props.userSearchResults]);

  return (
    <styled.Wrapper>
      <styled.Sidebar />

      {/* Recommendations expansion popup. Absolute-positioned popup. */}
      {isRecommendationsViewVisible
        && (
        <CompaniesPopup
          recommendations={props.recommendations}
          onClose={() => setIsRecommendationsViewVisible(false)}
        />
        )}

      <styled.AdaptedHeader id='Header' />

      <styled.ContentWrapper>
        {/* The search input. */}
        <SearchField
          lockPageCallback={props.lockPage}
          searchUserCallback={props.searchUser}
        />

        {/* The search results. */}
        {props.userSearchResults.results.length
          ? <SearchResults userSearchResults={props.userSearchResults} />
          : <SearchNoResults isFirstSearch={isFirstSearch} />}

        {/* Recommended companies. */}
        {props.recommendations.length > 0
          && <CompaniesResults companies={props.recommendations} />}

        {/* 'Show all recommendations' label. */}
        {props.recommendations.length > 4
          && <CompaniesExpansionLabel onClick={() => setIsRecommendationsViewVisible(true)} />}

      </styled.ContentWrapper>

      <styled.AdaptedFooter />

    </styled.Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
