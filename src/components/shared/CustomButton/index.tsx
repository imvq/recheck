import { useState } from 'react';

import * as types from './types';
import * as styled from './styled';

/**
 * Custom button with website-wide styles.
 */
export default (props: types.IProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <styled.Wrapper
      isDisabled={props.isDisabled}
      onClick={props.onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      <styled.ButtonContentArea
        height={props.height}
        color={props.color}
        backgroundColor={props.backgroundColor}
        isHollow={props.isHollow}
        fontSize={props.fontSize}
        isHovered={isHovered}
        isActive={isActive}
        isDisabled={props.isDisabled}
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
};
