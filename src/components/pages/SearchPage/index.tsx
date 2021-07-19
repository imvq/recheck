import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { connect } from 'react-redux';

import {
  AppState,
  setRecommendations,
  loadMatchedUsers,
  loadRecommendations,
  clearMatchedUsers,
  searchUser,
  setUserSearchResults,
  setPageLocked
} from 'store';

import * as constants from 'utils/constants';
import * as generalTypes from 'utils/typing/general';
import { cssVars } from 'utils/style.common';
import SearchPopupManager from 'components/shared/SearchPopupManager';
import DropList from 'components/shared/DropList';
import SearchField from './SearchField';
import CompaniesResults from './CompaniesResults';
import CompaniesPopup from './ExpandView/Companies';
import CompaniesExpansionLabel from './CompaniesExpansionLabel';
import SearchResults from './SearchResults';
import SearchNoResults from './SearchNoResults';

import * as types from './types';
import * as styled from './styled';
import { mapUserSearchDataToOptions } from './functions';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  quickSearchMatchedUsers: store.search.quickSearchMatchedUsers,
  recommendations: store.search.recommendations,
  userSearchResults: store.search.userSearchResults
});

const mapDispatchToProps: types.IDispatchProps = {
  clearMatchedUsers,
  loadMatchedUsers,
  loadRecommendations,
  searchUser,
  setUserSearchResults,
  setRecommendations,
  lockPage: setPageLocked
};

const SearchPage = (props: types.IProps) => {
  const [isRecommendationsViewVisible, setIsRecommendationsViewVisible] = useState(false);

  useEffect(() => {
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
          loadNextChunkCallback={props.loadRecommendations}
          onClose={() => {
            setIsRecommendationsViewVisible(false);
            resetRecommendations();
          }}
        />
        )}

      <styled.AdaptedHeader id='Header' />

      <styled.ContentWrapper>
        {/* The search input. */}
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

        {/* Quick search results. */}
        {props.quickSearchMatchedUsers.length ? (
          <styled.DropListWrapper>
            <DropList
              options={mapUserSearchDataToOptions(props.quickSearchMatchedUsers)}
              onClose={props.clearMatchedUsers}
              onOptionSelected={() => {}}
            />
          </styled.DropListWrapper>
        ) : null}

        {/* The search results. */}
        {props.userSearchResults.results.length
          ? <SearchResults userSearchResults={props.userSearchResults} />
          : <SearchNoResults isFirstSearch={isFirstSearch} />}

        {/* Recommended companies. */}
        {props.recommendations.length > 0
          && (
          <CompaniesResults
            companies={props.recommendations}
            setUserSearchResults={props.setUserSearchResults}
          />
          )}

        {/* 'Show all recommendations' label. */}
        {props.recommendations.length > 4
          && <CompaniesExpansionLabel onClick={() => setIsRecommendationsViewVisible(true)} />}

      </styled.ContentWrapper>

      <styled.AdaptedFooter />

      <SearchPopupManager />

    </styled.Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
