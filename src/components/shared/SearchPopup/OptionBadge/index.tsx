import { useState } from 'react';

import * as types from './types';
import * as styled from './styled';

export default (props: types.IProps) => {
  const [isExpanded, setIsExpanded] = useState(props.isExpanded);

  const expansion = (
    <styled.LabelWrapper>
      <styled.ExpandLabel onClick={() => setIsExpanded(!isExpanded)}>
        Детальнее
      </styled.ExpandLabel>
    </styled.LabelWrapper>
  );

  return (
    <styled.Wrapper adjustExpansionHeight={isExpanded}>
      {isExpanded ? props.hiddenView : props.mainView}
      {!isExpanded ? expansion : null}
    </styled.Wrapper>
  );
};
