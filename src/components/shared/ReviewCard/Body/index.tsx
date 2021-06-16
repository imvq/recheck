import { mapReviewToArray } from 'utils/functions';
import * as constants from 'utils/constants';

import * as types from './types';
import * as styled from './styled';

export default (props: types.IProps) => {
  const answers = mapReviewToArray(props.reviewCardData);

  return (
    <styled.Wrapper>
      {constants.REVIEW_QESTIONS.map((question, index) => (
        <styled.EntryWrapper key={question}>
          <styled.QuestionTitle>{question}</styled.QuestionTitle>
          <styled.Answer>{answers[index][0]}</styled.Answer>
          <styled.Answer>{answers[index][1]}</styled.Answer>
        </styled.EntryWrapper>
      ))}
    </styled.Wrapper>
  );
};
