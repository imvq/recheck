import { memo } from 'react';

import * as styled from './styled';

interface Props {
  children: string;
  isChecked: boolean;
  onChange(flag: boolean): void;
}

function CustomCheckBox(props: Props) {
  return (
    <styled.CustomCheckBoxWrapper>
      <styled.Label>
        <styled.Input
          type='checkbox'
          checked={props.isChecked}
          onChange={() => props.onChange(!props.isChecked)}
        />
        <span>{props.children}</span>
      </styled.Label>
    </styled.CustomCheckBoxWrapper>
  );
}

export default memo(CustomCheckBox);
