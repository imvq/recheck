import { memo } from 'react';

import * as types from './types';
import * as styled from '../BaseEntryStyled/styled';

function MenuEntry(props: types.IProps) {
  return (
    <styled.Wrapper
      onClick={props.onClick}
      isPressed={props.isPressed}
    >
      {props.children}
    </styled.Wrapper>
  );
}

export default memo(MenuEntry);
