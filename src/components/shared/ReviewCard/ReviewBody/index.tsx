import { memo } from 'react';

import { IReviewParsed } from 'commons/types';

import * as styled from './styled';

export interface Props {
  reviewCardData: IReviewParsed;
}

function Body(props: Props) {
  return (
    <styled.ReviewBody>
      {props.reviewCardData.questions.map((question, index) => (
        <styled.EntryWrapper key={question}>
          <styled.QuestionTitle>{question}</styled.QuestionTitle>
          <styled.Answer>{props.reviewCardData.answers[index]}</styled.Answer>

          {props.reviewCardData.marks[index]
            && <styled.Answer isMark>{`Оценка: ${props.reviewCardData.marks[index]}`}</styled.Answer>}
        </styled.EntryWrapper>
      ))}
    </styled.ReviewBody>
  );
}

export default memo(Body);
