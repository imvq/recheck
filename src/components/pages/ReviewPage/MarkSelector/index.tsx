import { useState } from 'react';

import { IProps } from './types';
import {
  Wrapper, TitleWrapper, Title, PipelineWrapper, Pipe,
  StyledPoint, LabelsWrapper, Label
} from './styled';

/**
 * A panel with 10 marks available for selection.
 */
export default (props: IProps & { hasEnlargedLabels?: boolean; }) => {
  const [selected, setSelected] = useState(0);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Нажмите на цифру, чтобы поставить оценку</Title>
      </TitleWrapper>
      <PipelineWrapper>
        {[...Array(10).keys()].map(key => (
          <StyledPoint
            key={key}
            onClick={() => {
              setSelected(key + 1);
              props.setMark(key + 1);
            }}
            offset={key}
            isFilled={selected >= key + 1}
          >
            {key + 1}
          </StyledPoint>
        ))}
        {[...Array(9).keys()].map(key => (<Pipe key={key} isFilled={selected > key + 1} />))}
      </PipelineWrapper>
      <LabelsWrapper>
        {props.labels.map(label => (
          <Label key={label} isEnlarged={props.hasEnlargedLabels}>{label}</Label>
        ))}
      </LabelsWrapper>
    </Wrapper>
  );
};
