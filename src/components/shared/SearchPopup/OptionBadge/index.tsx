import { useState } from 'react';

import { IProps } from './types';
import { Wrapper, LabelWrapper, ExpandLabel } from './styled';

export default (props: IProps) => {
  const [isExpanded, setIsExpanded] = useState(props.isExpanded);

  const expansion = (
    <LabelWrapper>
      <ExpandLabel onClick={() => setIsExpanded(!isExpanded)}>
        Детальнее
      </ExpandLabel>
    </LabelWrapper>
  );

  return (
    <Wrapper>
      {isExpanded ? props.hiddenView : props.mainView}
      {!isExpanded ? expansion : null}
    </Wrapper>
  );
};
