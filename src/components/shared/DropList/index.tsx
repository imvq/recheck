import { memo } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import ExtendedOption from './ExtendedOption';

import * as types from './types';
import * as styled from './styled';

const DropList = (props: types.IProps) => (
  <OutsideClickHandler display='contents' onOutsideClick={props.onClose}>
    <styled.Wrapper>
      <styled.Content>
        {props.options.map(option => (
          <DropList.Option
            key={option.key}
            optionData={option}
            onClick={() => props.onOptionSelected(option)}
          />
        ))}
      </styled.Content>
    </styled.Wrapper>
  </OutsideClickHandler>
);

DropList.Option = ExtendedOption;

export default memo(DropList);
