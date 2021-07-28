import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { connect } from 'react-redux';

import {
  AppState,
  setColleagues,
  setRecommendations,
  setRecommendedCompaniesShownMembers,
  loadMatchedUsers,
  loadRecommendations,
  clearMatchedUsers,
  searchUser,
  setUserSearchResults,
  setPageLocked
} from 'store';

import * as constants from 'utils/constants';
import * as generalTypes from 'utils/typing/general';
import SearchPopupManager from 'components/shared/SearchPopupManager';
import DropList from 'components/shared/DropList';
import SearchField from './SearchField';
import ColleaguesView from './ColleaguesView';
import CompaniesResults from './CompaniesResults';
import CompaniesPopup from './ExpandView/Companies';
import CompaniesExpansionLabel from './CompaniesExpansionLabel';
import SearchResults from './SearchResults';
import SearchNoResults from './SearchNoResults';

import * as types from './types';
import * as styled from './styled';
import { mapUserSearchDataToOptions } from './functions';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  colleagues: store.search.colleagues,
  quickSearchMatchedUsers: store.search.quickSearchMatchedUsers,
  recommendations: store.search.recommendations,
  userSearchResults: store.search.userSearchResults
});

const mapDispatchToProps: types.IDispatchProps = {
  clearColleagues: () => setColleagues([]),
  clearMatchedUsers,
  loadMatchedUsers,
  loadRecommendations,
  searchUser,
  setUserSearchResults,
  setRecommendations,
  setRecommendedCompaniesShownMembers,
  lockPage: setPageLocked
};

const SearchPage = (props: types.IProps) => {
  const [isRecommendationsViewVisible, setIsRecommendationsViewVisible] = useState(false);

  useEffect(() => {
    // Clear the colleagues array to avoid invalid conditional render
    // due to the colleagues array dependency.
    props.clearColleagues();

    // Load recommendations only one time and never reload them again.
    if (props.recommendations.length === 0) {
      props.loadRecommendations(0);
    }
  }, []);

  const resetRecommendations = () => {
    props.setRecommendations(props.recommendations.slice(0, constants.RECOMMENDATIONS_LENGTH));
  };

  const findUsersMatches = (tokens: string[]) => {
    props.loadMatchedUsers(tokens);
  };

  // Recommendations expansion popup. Absolute-positioned popup.
  const RecommendationsPopup = (
    <CompaniesPopup
      recommendations={props.recommendations}
      loadNextChunkCallback={props.loadRecommendations}
      onClose={() => {
        setIsRecommendationsViewVisible(false);
        resetRecommendations();
      }}
    />
  );

  // Reduced list of recommended companies.
  const RecommendedCompaniesList = (
    <CompaniesResults
      companies={props.recommendations}
      setUserSearchResults={results => {
        setIsRecommendationsViewVisible(true);
        props.setRecommendedCompaniesShownMembers(results);
      }}
    />
  );

  // The search input.
  const SearchInput = (
    <SearchField
      lockPageCallback={props.lockPage}
      searchUserCallback={props.searchUser}
      quickSearchCallback={(event: generalTypes.InputEvent) => {
        if (event.target.value) {
          findUsersMatches(event.target.value.trim().split(' '));
        } else {
          props.clearMatchedUsers();
        }
      }}
    />
  );

  // Dropdown with matched users (while typing something at the search field).
  const QuickSearchResults = (
    <styled.DropListWrapper>
      <DropList
        options={mapUserSearchDataToOptions(props.quickSearchMatchedUsers)}
        onClose={props.clearMatchedUsers}
        onOptionSelected={() => {}}
      />
    </styled.DropListWrapper>
  );

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

      <styled.AdaptedHeader id='Header' />

      {/* Main view with search field and search results area. */}
      {props.colleagues.length === 0 && (
        <styled.ContentWrapper>
          {SearchInput}
          {props.quickSearchMatchedUsers.length > 0 && QuickSearchResults}
          {/* The search results. */}
          {props.userSearchResults.results.length
            ? <SearchResults userSearchResults={props.userSearchResults} />
            : <SearchNoResults isFirstSearch={isFirstSearch} />}
          {props.recommendations.length > 0 && RecommendedCompaniesList}
          {/* 'Show all recommendations' label. */}
          {props.recommendations.length > 4
            && <CompaniesExpansionLabel onClick={() => setIsRecommendationsViewVisible(true)} />}
        </styled.ContentWrapper>
      )}

      {/* Colleagues view. */}
      {/* Supposed to be rendered when we need to choose a colleague */}
      {/* to give a review about. */}
      {props.colleagues.length > 0 && (
        <ColleaguesView />
      )}
      <styled.AdaptedFooter />

      {/* Recommended companies' stuff. */}
      {isRecommendationsViewVisible && RecommendationsPopup}
      <SearchPopupManager onPopupClose={() => setIsRecommendationsViewVisible(false)} />

    </styled.Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
