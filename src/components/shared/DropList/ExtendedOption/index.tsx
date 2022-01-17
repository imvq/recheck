import { memo } from 'react';

import * as types from './types';
import * as styled from './styled';

function ExtendedOption(props: types.IProps) {
  return (
    <styled.ExtendedOption onClick={() => props.onClick(props.optionData)}>
      <styled.LogoWrapper src={props.optionData.imageUrl || ''} alt='' />
      <styled.SelectTitle>{props.optionData.text}</styled.SelectTitle>
    </styled.ExtendedOption>
  );
}

export default memo(ExtendedOption);
