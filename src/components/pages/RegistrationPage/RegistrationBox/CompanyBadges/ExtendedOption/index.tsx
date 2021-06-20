import * as types from './types';
import * as styled from './styled';

/**
 * Custom option with logo providing callback on its selection.
 * The callback is to be used when selectiong the option's inner value.
 */
export default (props: types.IProps) => (
  <styled.Wrapper onClick={() => props.onClick(props.optionData)}>
    <styled.LogoWrapper src={props.optionData.logoUrl || ''} alt='' />
    <styled.SelectTitle>{props.optionData.text}</styled.SelectTitle>
  </styled.Wrapper>
);
