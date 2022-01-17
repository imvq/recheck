import { memo } from 'react';
import * as types from './types';
import * as styled from './styled';

function CustomOption(props: types.IProps) {
  return (
    <styled.Wrapper onClick={() => props.onClick(props.optionData)}>
      <styled.SelectTitle>{props.optionData.text}</styled.SelectTitle>
    </styled.Wrapper>
  );
}

export default memo(CustomOption);
