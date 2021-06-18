import { useState } from 'react';

import * as types from './types';
import * as styled from './styled';

/**
 * A panel with 10 marks available for selection.
 */
export default (props: types.IProps & { hasEnlargedLabels?: boolean; }) => {
  const [selected, setSelected] = useState(0);

  return (
    <styled.Wrapper>
      <styled.TitleWrapper>
        <styled.Title>Нажмите на цифру, чтобы поставить оценку</styled.Title>
      </styled.TitleWrapper>
      <styled.PipelineWrapper>
        {[...Array(10).keys()].map(key => (
          <styled.StyledPoint
            key={key}
            onClick={() => {
              setSelected(key + 1);
              props.setMark(key + 1);
            }}
            offset={key}
            isFilled={selected >= key + 1}
          >
            {key + 1}
          </styled.StyledPoint>
        ))}
        {[...Array(9).keys()].map(key => (<styled.Pipe key={key} isFilled={selected > key + 1} />))}
      </styled.PipelineWrapper>
      <styled.LabelsWrapper>
        {props.labels.map(label => (
          <styled.Label key={label} isEnlarged={props.hasEnlargedLabels}>{label}</styled.Label>
        ))}
      </styled.LabelsWrapper>
    </styled.Wrapper>
  );
};
