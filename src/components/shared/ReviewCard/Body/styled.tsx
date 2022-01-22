import styled from 'styled-components';

export const Body = styled.div`
  width: 100%;
  font-size: 1.3rem;
  box-sizing: border-box;
  padding: 2rem 5rem;
`;

export const EntryWrapper = styled.div`
  padding: 1rem 0;
`;

export const QuestionTitle = styled.h3`
  font-weight: 600;
  line-height: 2rem;
`;

interface IAnswerProps {
  isMark?: boolean;
}

export const Answer = styled.p<IAnswerProps>`
  color: #555555;
  line-height: 1.7rem;
  font-weight: ${props => (props.isMark ? '700' : '400')};
`;
