import { useState } from 'react';

import { IProps } from './types';
import { Wrapper, Input, AdapdetMagnifier } from './styled';

export default (props: IProps) => {
  const [searchText, setSearchText] = useState('');

  const doSearch = () => {
    props.lockPageCallback();
    props.searchUserCallback(searchText);
  };

  return (
    <Wrapper>
      <Input
        type='text'
        placeholder='Введите название компании или имя и фамилию сотрудника, который работал с вами:'
        onChange={(event) => setSearchText(event.target.value)}
        onBlur={doSearch}
      />
      <AdapdetMagnifier onClick={doSearch} />
    </Wrapper>
  );
};
