import { memo, useState, KeyboardEvent } from 'react';
import { connect } from 'react-redux';

import { AppState, setSearchText } from 'store';
import { useBlur } from 'commons/utils/hooks';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  searchText: store.search.searchText
});

const mapDispatchToProps: types.IDispatchProps = {
  setSearchText
};

const SearchField = (props: types.IProps) => {
  const [previousSearch, setPreviousSearch] = useState<string | null>(null);

  const [inputReference, blur] = useBlur();

  const doSearch = () => {
    if (props.searchText !== '' && props.searchText !== previousSearch) {
      setPreviousSearch(props.searchText);
      props.lockPageCallback();
      props.searchUserCallback(props.searchText.trim().split(' '));
      props.setSearchText('');
      blur();
    }
  };

  const keyHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      doSearch();
    }
  };

  return (
    <styled.Wrapper>
      <styled.Input
        type='text'
        ref={inputReference}
        value={props.searchText}
        placeholder='Введите название компании или имя и фамилию сотрудника, который работал с вами:'
        onChange={event => {
          props.quickSearchCallback(event);
          props.setSearchText(event.target.value);
        }}
        onKeyDown={keyHandler}
      />
      {/* $isDimmed must not be inserted into the DOM tree so it was made transient.' */}
      <styled.AdaptedMagnifier $isDimmed={props.searchText === ''} onClick={doSearch} />
    </styled.Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(SearchField));
