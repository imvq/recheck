import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { connect } from 'react-redux';

import * as generalTypes from 'commons/types/general';
import * as constants from 'commons/utils/constants';

import { mainToolbarEntries } from 'commons/types/unions';
import {
  AppState,
  setRecommendations,
  setRecommendedCompaniesShownMembers,
  clearMatchedUsers,
  setCurrentMainToolbarEntry,
  setSearchText,
  setUserSearchResults,
  setPageLocked
} from 'store';
import {
  getQuickSearchMatchedUsersWithoutSelf,
  getUserSearchResultsWithoutSelf
} from 'store/selectors';
import {
  loadRecommendations,
  searchUsersByTokens,
  searchUserByShareableId,
  quickSearchUsersByTokens
} from 'store/thunks';

import DropList from 'components/shared/DropList';
import PopupManager from 'components/shared/PopupManager';

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
  isConfirmed: store.profile.isConfirmed,
  quickSearchMatchedUsers: getQuickSearchMatchedUsersWithoutSelf(store),
  recommendations: store.search.recommendations,
  userSearchResults: getUserSearchResultsWithoutSelf(store)
});

const mapDispatchToProps: types.IDispatchProps = {
  clearMatchedUsers,
  clearSearchText: () => setSearchText(''),
  quickSearchUsersByTokens,
  loadRecommendations,
  searchUsersByTokens,
  searchUserByShareableId,
  setCurrentMainToolbarEntry,
  setUserSearchResults,
  setRecommendations,
  setRecommendedCompaniesShownMembers,
  lockPage: setPageLocked
};

function SearchPage(props: types.IProps) {
  const [isRecommendationsViewVisible, setIsRecommendationsViewVisible] = useState(false);

  useEffect(() => {
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
    props.quickSearchUsersByTokens(tokens);
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
        props.searchUsersByTokens(tokens);
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
    if (props.isConfirmed) {
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
      <styled.ContentWrapper>
        {SearchInput}
        {props.quickSearchMatchedUsers.length > 0 && QuickSearchResults}

        {/* The search results. */}
        {props.userSearchResults.length
          ? <SearchResults userSearchResults={props.userSearchResults} />
          : <SearchNoResults isFirstSearch={isFirstSearch} />}

        {/* Recommended companies (predefined ones). */}
        {props.recommendations.length > 0 && RecommendedCompaniesList}

        {/* 'Show all recommendations' label. */}
        {props.recommendations.length > 4
            && <CompaniesExpansionLabel onClick={() => setIsRecommendationsViewVisible(true)} />}
      </styled.ContentWrapper>
      <styled.AdaptedFooter />

      {/* Recommended companies' stuff. */}
      {isRecommendationsViewVisible && RecommendationsPopup}
      <PopupManager onPopupClose={() => setIsRecommendationsViewVisible(false)} />

    </styled.Wrapper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
