import styled from 'styled-components';

export const Wrapper = styled.div`
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

export const Answer = styled.p<{ isHighlighted?: boolean; }>`
  color: ${props => (props.isHighlighted ? 'blue' : '#555555')};
  text-decoration: ${props => (props.isHighlighted ? 'underline' : 'none')};
  cursor: ${props => (props.isHighlighted ? 'pointer' : 'default')};
  line-height: 1.7rem;
`;
