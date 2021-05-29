import { mapReviewToArray } from 'utils/functions';
import * as constants from 'utils/constants';
import { IProps } from './types';
import { Wrapper, EntryWrapper, QuestionTitle, Answer } from './styled';

export default (props: IProps) => {
  const answers = mapReviewToArray(props.reviewCardData);

  return (
    <Wrapper>
      {constants.REVIEW_QESTIONS.map((question, index) => (
        <EntryWrapper key={question}>
          <QuestionTitle>{question}</QuestionTitle>
          <Answer>{answers[index]}</Answer>
        </EntryWrapper>
      ))}
    </Wrapper>
  );
};
