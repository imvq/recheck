import { memo } from 'react';

import * as types from './types';
import * as styled from '../BaseEntryStyled/styled';

function FakeEntry(props: types.IProps) {
  return (
    <styled.Entry onClick={props.onClick}>
      {props.children}
    </styled.Entry>
  );
}

export default memo(FakeEntry);
