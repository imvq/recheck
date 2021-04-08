import { useState } from 'react';

import { IProps } from './types';
import {
  Wrapper, RoundedAreaLeft, RoundedAreaRight, ButtonContentArea
} from './styled';

/**
 * Custom button with website-wide styles.
 */
export default (props: IProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <Wrapper
      isDisabled={props.isDisabled}
      onClick={props.onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      <ButtonContentArea
        height={props.height}
        color={props.color}
        backgroundColor={props.backgroundColor}
        fontSize={props.fontSize}
        isHovered={isHovered}
        isActive={isActive}
        isDisabled={props.isDisabled}
      >
        <RoundedAreaLeft
          height={props.height}
          backgroundColor={props.backgroundColor}
        />
        {props.children}
        <RoundedAreaRight
          height={props.height}
          backgroundColor={props.backgroundColor}
        />
      </ButtonContentArea>
    </Wrapper>
  );
};
