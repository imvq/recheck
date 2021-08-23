import { memo, useState } from 'react';

import * as types from './types';
import * as styled from './styled';

const Title = (
  <styled.TitleWrapper>
    <styled.Title>Нажмите на цифру, чтобы поставить оценку</styled.Title>
  </styled.TitleWrapper>
);

/**
 * A panel with 10 marks available for selection.
 */
function MarkSelector(props: types.IProps & { hasEnlargedLabels?: boolean; }) {
  const [selected, setSelected] = useState(0);

  function handleClick(key: number) {
    setSelected(key + 1);
    props.setMark(key + 1);
  }

  // Line with points (representing marks).
  const Pipeline = (
    <styled.PipelineWrapper>
      {[...Array(10).keys()].map(key => (
        <styled.StyledPoint
          key={key}
          onClick={() => handleClick(key)}
          offset={key}
          isFilled={selected >= key + 1}
        >
          {key + 1}
        </styled.StyledPoint>
      ))}
      {[...Array(9).keys()].map(key => (<styled.Pipe key={key} isFilled={selected > key + 1} />))}
    </styled.PipelineWrapper>
  );

  // Comments beneath key marks.
  const Labels = (
    <styled.LabelsWrapper>
      {props.labels.map(label => (
        <styled.Label key={label} isEnlarged={props.hasEnlargedLabels}>{label}</styled.Label>
      ))}
    </styled.LabelsWrapper>
  );

  return (
    <styled.Wrapper>
      {Title}
      {Pipeline}
      {Labels}
    </styled.Wrapper>
  );
}

export default memo(MarkSelector);
