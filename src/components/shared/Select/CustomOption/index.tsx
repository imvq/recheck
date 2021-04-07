import { IProps } from './types';
import { Wrapper } from './styled';

/**
 * Custom option providing callback on its selection.
 * The callback is to be used when selectiong the option's inner value.
 */
export default (props: IProps) => (
  <Wrapper onClick={() => props.onClick(props.optionData)}>
    <span>{props.optionData.text}</span>
  </Wrapper>
);
