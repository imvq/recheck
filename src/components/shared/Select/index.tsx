import { useState, useEffect } from 'react';

import { IProps } from './types';
import { Wrapper } from './styled';

export const CustomSelect = (props: IProps) => {
  const [isDimmed, setIsDimmed] = useState(false);

  useEffect(() => setIsDimmed(!props.children), []);

  return (
    <Wrapper isDimmed={isDimmed}>
      {props.children || props.placeholder || 'Выбрать'}
    </Wrapper>
  );
};

export const CustomOption = ({ children }: { children: string }) => (
  <div>{children}</div>
);
