import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { connect } from 'react-redux';

import * as generalTypes from 'commons/types/general';
import * as constants from 'commons/utils/constants';

import { mainToolbarEntries } from 'commons/types/unions';
import { useQuery } from 'commons/utils/misc/hooks';
import {
  AppState,
  clearColleagues,
  setRecommendations,
  setRecommendedCompaniesShownMembers,
  loadMatchedUsers,
  loadRecommendations,
  clearMatchedUsers,
  searchUser,
  searchUserByShareableId,
  setCurrentMainToolbarEntry,
  setSearchText,
  setUserSearchResults,
  setPageLocked
} from 'store';
import {
  getQuickSearchMatchedUsersWithoutSelf,
  getUserSearchResultsWithoutSelf
} from 'store/selectors';

import DropList from 'components/shared/DropList';
import PopupManager from 'components/shared/PopupManager';

import ColleaguesView from './ColleaguesView';
import CompaniesExpansionLabel from './CompaniesExpansionLabel';
import CompaniesResults from './CompaniesResults';
import CompaniesPopup from './ExpandView/Companies';
import SearchField from './SearchField';
import SearchNoResults from './SearchNoResults';
import SearchResults from './SearchResults';

import * as misc from './misc';
import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  colleaguesState: store.search.colleaguesState,
  isAuthorized: store.auth.isAuthorized,
  quickSearchMatchedUsers: getQuickSearchMatchedUsersWithoutSelf(store),
  recommendations: store.search.recommendations,
  userSearchResults: getUserSearchResultsWithoutSelf(store)
});

const mapDispatchToProps: types.IDispatchProps = {
  clearColleagues,
  clearMatchedUsers,
  clearSearchText: () => setSearchText(''),
  loadMatchedUsers,
  loadRecommendations,
  searchUser,
  searchUserByShareableId,
  setCurrentMainToolbarEntry,
  setUserSearchResults,
  setRecommendations,
  setRecommendedCompaniesShownMembers,
  lockPage: setPageLocked
};

function SearchPage(props: types.IProps) {
  const query = useQuery();
  const colleaguesUpdateQueryFlag = query.get('no-colleagues-update') !== 'true';

  const [isRecommendationsViewVisible, setIsRecommendationsViewVisible] = useState(false);

  useEffect(() => {
    // Clear the colleagues array to avoid invalid conditional render
    // due to the colleagues array dependency.
    if (colleaguesUpdateQueryFlag) {
      props.clearColleagues();
    }

    props.setCurrentMainToolbarEntry(mainToolbarEntries.NewSearch);

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
      searchUserCallback={tokens => {
        props.searchUser(tokens);
        props.clearMatchedUsers();
        props.clearSearchText();
      }}
      quickSearchCallback={(event: generalTypes.IInputEvent) => {
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
        options={misc.mapUserSearchDataToOptions(props.quickSearchMatchedUsers)}
        onClose={props.clearMatchedUsers}
        onOptionSelected={matchedResult => {
          props.searchUserByShareableId(matchedResult.key);
          props.clearMatchedUsers();
          props.clearSearchText();
        }}
      />
    </styled.DropListWrapper>
  );

  // Don't show anything until the user starts its search.
  // If the user search request returned empty list than show
  // a 'no results' label.
  const [isFirstSearch, setIsFirstSearch] = useState(true);
  const firstRender = useRef(true);

  useLayoutEffect(() => {
    if (props.isAuthorized) {
      if (firstRender.current) {
        firstRender.current = false;
        return;
      }

      setIsFirstSearch(false);
    }
  }, [props.userSearchResults]);

  return (
    <styled.Wrapper>
      <styled.Sidebar />

      <styled.AdaptedHeader id='Header' />

      {/* Main view with search field and search results area. */}
      {!props.colleaguesState.areLoaded && (
        <styled.ContentWrapper>
          {SearchInput}
          {props.quickSearchMatchedUsers.length > 0 && QuickSearchResults}
          {/* The search results. */}
          {props.userSearchResults.length
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
      {props.colleaguesState.areLoaded && (
        <ColleaguesView />
      )}
      <styled.AdaptedFooter />

      {/* Recommended companies' stuff. */}
      {isRecommendationsViewVisible && RecommendationsPopup}
      <PopupManager onPopupClose={() => setIsRecommendationsViewVisible(false)} />

    </styled.Wrapper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
