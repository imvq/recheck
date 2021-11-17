import { memo } from 'react';

import * as types from './types';
import * as styled from './styled';

function Body(props: types.IProps) {
  return (
    <styled.Wrapper>
      {props.reviewCardData.questions.map((question, index) => (
        <styled.EntryWrapper key={question}>
          <styled.QuestionTitle>{question}</styled.QuestionTitle>
          <styled.Answer>{props.reviewCardData.answers[index]}</styled.Answer>

          {props.reviewCardData.marks[index]
            && <styled.Answer>{`Оценка: ${props.reviewCardData.marks[index]}`}</styled.Answer>}
        </styled.EntryWrapper>
      ))}
    </styled.Wrapper>
  );
}

export default memo(Body);
