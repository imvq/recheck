import { useState } from 'react';

import * as types from './types';
import * as styled from './styled';

export default (props: types.IProps) => {
  const [previousSearch, setPreviousSearch] = useState<string | null>(null);
  const [searchText, setSearchText] = useState('');

  const doSearch = () => {
    if (searchText !== previousSearch) {
      setPreviousSearch(searchText);
      props.lockPageCallback();
      props.searchUserCallback(searchText);
    }
  };

  return (
    <styled.Wrapper>
      <styled.Input
        type='text'
        placeholder='Введите название компании или имя и фамилию сотрудника, который работал с вами:'
        onChange={(event) => setSearchText(event.target.value)}
        onBlur={doSearch}
      />
      <styled.AdaptedMagnifier onClick={doSearch} />
    </styled.Wrapper>
  );
};
