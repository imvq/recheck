import { useState, KeyboardEvent } from 'react';

import * as types from './types';
import * as styled from './styled';

export default (props: types.IProps) => {
  const [previousSearch, setPreviousSearch] = useState<string | null>(null);
  const [searchText, setSearchText] = useState('');

  const doSearch = () => {
    if (searchText !== '' && searchText !== previousSearch) {
      setPreviousSearch(searchText);
      props.lockPageCallback();
      props.searchUserCallback(searchText.trim().split(' '));
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
        placeholder='Введите название компании или имя и фамилию сотрудника, который работал с вами:'
        onChange={(event) => {
          props.quickSearchCallback(event);
          setSearchText(event.target.value);
        }}
        onKeyDown={keyHandler}
      />
      {/* $isDimmed must not be inserted into the DOM tree so it was made transient.' */}
      <styled.AdaptedMagnifier $isDimmed={searchText === ''} onClick={doSearch} />
    </styled.Wrapper>
  );
};
