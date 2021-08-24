import { memo } from 'react';

import * as types from './types';
import * as styled from '../BaseEntryStyled/styled';

function FakeEntry(props: types.IProps) {
  return (
    <styled.Wrapper onClick={props.onClick}>
      {props.children}
    </styled.Wrapper>
  );
}

export default memo(FakeEntry);
