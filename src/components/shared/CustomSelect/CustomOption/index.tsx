import * as types from './types';
import * as styled from './styled';

/**
 * Custom option providing callback on its selection.
 * The callback is to be used when selectiong the option's inner value.
 */
export default (props: types.IProps) => (
  <styled.Wrapper onClick={() => props.onClick(props.optionData)}>
    <styled.SelectTitle>{props.optionData.text}</styled.SelectTitle>
  </styled.Wrapper>
);
