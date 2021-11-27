import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { connect } from 'react-redux';

import * as store from 'store';

import { IInputEvent } from 'commons/types';
import { mainToolbarEntries } from 'commons/types/unions';

import DropList from 'components/shared/DropList';
import PopupManager from 'components/shared/PopupManager';

import CompaniesExpansionLabel from './CompaniesExpansionLabel';
import CompaniesResults from './CompaniesResults';
import CompaniesPopup from './ExpandView/Companies';
import SearchField from './SearchField';
import NoSearchResultsPlaceholder from './NoSearchResultsPlaceholder';
import SearchResults from './SearchResults';

import * as misc from './misc';
import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (state: store.AppState): types.IStateProps => ({
  privateToken: store.getCurrentPrivateToken(state),
  isConfirmed: store.getIsUserConfirmed(state),
  quickSearchMatchedUsers: store.getQuickSearchMatchedUsersWithoutSelf(state),
  recommendations: store.getRecommendations(state),
  userSearchResults: store.getUserSearchResultsWithoutSelf(state)
});

const mapDispatchToProps: types.IDispatchProps = {
  clearMatchedUsers: store.clearMatchedUsers,
  clearSearchText: () => store.setSearchText(''),
  quickSearchUsersByTokens: store.quickSearchUsersByTokens,
  loadRecommendations: store.loadRecommendations,
  searchUsersByTokens: store.searchUsersByTokens,
  searchUserByShareableId: store.searchUserByShareableId,
  setCurrentMainToolbarEntry: store.setCurrentMainToolbarEntry,
  setUserSearchResults: store.setUserSearchResults,
  setRecommendations: store.setRecommendations,
  setRecommendedCompaniesShownMembers: store.setRecommendedCompaniesShownMembers,
  lockPage: store.setPageLocked
};

function SearchPage(props: types.IProps) {
  const [isRecommendationsViewVisible, setIsRecommendationsViewVisible] = useState(false);

  // Flags to prevent display of a placeholder for no search results.
  const [isFirstSearch, setIsFirstSearch] = useState(true);
  const firstRender = useRef(true);

  useEffect(() => {
    // Set the toolbar menu to NewSearch.
    props.setCurrentMainToolbarEntry(mainToolbarEntries.NewSearch);

    // We must load recommendations only when a user is authenticated
    // and only in case the recommendations list is empty.
    if (props.privateToken && props.recommendations.length === 0) {
      props.loadRecommendations(props.privateToken as string, 0);
    }
  }, [props.privateToken]);

  // Recommendations expansion popup. Absolute-positioned popup.
  const RecommendationsPopup = (
    <CompaniesPopup
      recommendations={props.recommendations}
      loadNextChunkCallback={props.loadRecommendations}
      onClose={() => {
        setIsRecommendationsViewVisible(false);
        // Each time we close the recommendation popup we must drop all companies we loaded.
        props.loadRecommendations(props.privateToken as string, 0, true);
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

  // The search input field.
  const SearchInput = (
    <SearchField
      lockPageCallback={props.lockPage}
      searchUserCallback={tokens => {
        props.searchUsersByTokens(tokens);
        props.clearMatchedUsers();
        props.clearSearchText();
      }}
      quickSearchCallback={(event: IInputEvent) => {
        if (event.target.value) {
          props.quickSearchUsersByTokens(event.target.value.trim().split(' '));
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

  // Main results area.
  // Displays users if they match search query
  // or shows a predefined placeholder.
  const MainSearchResultsArea = props.userSearchResults.length
    // A list with search results if any.
    ? <SearchResults userSearchResults={props.userSearchResults} />

    // A placeholder in case there is no results.
    : <NoSearchResultsPlaceholder isFirstSearch={isFirstSearch} />;

  // Composition of the constituent components.
  // Must not be displayed until users get their private tokens.
  const GuardedContent = (
    <styled.Wrapper>
      <styled.Sidebar />

      <styled.AdaptedHeader id='Header' />

      {/* Main view with search field and search results area. */}
      <styled.ContentWrapper>
        {SearchInput}
        {props.quickSearchMatchedUsers.length > 0 && QuickSearchResults}
        {/* The search results. */}
        {MainSearchResultsArea}
        {/* Recommended companies (predefined ones). */}
        {/* This is a reduced list. */}
        {props.recommendations.length > 0 && RecommendedCompaniesList}
        {/* If the list of recommended companies does not fit in the reduced list */}
        {/* we must display a 'Show all recommendations' label. */}
        {props.recommendations.length > 4
            && <CompaniesExpansionLabel onClick={() => setIsRecommendationsViewVisible(true)} />}
      </styled.ContentWrapper>

      <styled.AdaptedFooter />

      {/* Recommended companies' stuff. */}
      {isRecommendationsViewVisible && RecommendationsPopup}
      <PopupManager onPopupClose={() => setIsRecommendationsViewVisible(false)} />
    </styled.Wrapper>
  );

  // Don't show anything until users start their search.
  // If search request returns empty list then show
  // a 'no results' label.
  useLayoutEffect(() => {
    if (props.isConfirmed) {
      if (firstRender.current) {
        firstRender.current = false;
        return;
      }

      setIsFirstSearch(false);
    }
  }, [props.userSearchResults]);

  return props.privateToken ? GuardedContent : null;
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
