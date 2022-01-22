import { memo } from 'react';

import * as types from './types';
import * as styled from './styled';

function Body(props: types.IProps) {
  return (
    <styled.Body>
      {props.reviewCardData.questions.map((question, index) => (
        <styled.EntryWrapper key={question}>
          <styled.QuestionTitle>{question}</styled.QuestionTitle>
          <styled.Answer>{props.reviewCardData.answers[index]}</styled.Answer>

          {props.reviewCardData.marks[index]
            && <styled.Answer isMark>{`Оценка: ${props.reviewCardData.marks[index]}`}</styled.Answer>}
        </styled.EntryWrapper>
      ))}
    </styled.Body>
  );
}

export default memo(Body);
