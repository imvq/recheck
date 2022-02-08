import { memo } from 'react';

import * as types from './types';
import * as styled from '../BaseEntryStyled/styled';

function MenuEntry(props: types.IProps) {
  return (
    <styled.Entry
      onClick={props.onClick}
      isPressed={props.isPressed}
    >
      {props.children}
    </styled.Entry>
  );
}

export default memo(MenuEntry);
