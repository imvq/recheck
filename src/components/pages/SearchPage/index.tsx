import { connect } from 'react-redux';

import { AppState, searchUser, setPageLocked } from 'store';
import PersonCard from 'components/shared/PersonCard';
import SearchField from './SearchField';
import { IProps, IStateProps, IDispatchProps } from './types';
import {
  Wrapper, AdaptedHeader, AdaptedFooter, ContentWrapper,
  TitleWrapper, Title, ResultsWrapper, PersonCardWrapper,
  SpanWrapper, Span
} from './styled';

const mapStateToProps = (store: AppState): IStateProps => ({
  userSearchResults: store.search.userSearchResults
});

const mapDispatchToProps: IDispatchProps = {
  searchUser,
  lockPage: setPageLocked
};

const SearchPage = (props: IProps) => (
  <Wrapper>
    <AdaptedHeader />
    <ContentWrapper>
      <SearchField lockPageCallback={props.lockPage} searchUserCallback={props.searchUser} />
      <TitleWrapper><Title>Результат поиска:</Title></TitleWrapper>
      <ResultsWrapper>
        {props.userSearchResults.length
          ? props.userSearchResults.map(userData => (
            <PersonCardWrapper><PersonCard userData={userData} /></PersonCardWrapper>))
          : <SpanWrapper><Span>Результатов нет</Span></SpanWrapper>}
      </ResultsWrapper>
    </ContentWrapper>
    <AdaptedFooter />
  </Wrapper>
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
