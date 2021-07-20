import * as types from './types';
import * as styled from './styled';

/**
 * Custom button with website-wide styles.
 */
export default (props: types.IProps) => (
  <styled.Wrapper onClick={props.onClick} disabled={props.isDisabled}>
    <styled.ButtonContentArea
      isDisabled={props.isDisabled}
      width={props.width}
      height={props.height}
      color={props.color}
      backgroundColor={props.backgroundColor}
      isHollow={props.isHollow}
      fontSize={props.fontSize}
    >
      <styled.RoundedAreaLeft
        height={props.height}
        backgroundColor={props.backgroundColor}
        isHollow={props.isHollow}
      />
      {props.children}
      <styled.RoundedAreaRight
        height={props.height}
        backgroundColor={props.backgroundColor}
        isHollow={props.isHollow}
      />
    </styled.ButtonContentArea>
  </styled.Wrapper>
);
