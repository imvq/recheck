import styled from 'styled-components';

export const Wrapper = styled.div<{ adjustExpansionHeight?: boolean; }>`
  width: 22rem;
  height: fit-content;
  min-height: ${props => (props.adjustExpansionHeight ? '20rem' : '12.5rem')};
  box-sizing: border-box;
  padding: 1.2rem;
  border-radius: 3rem;
  border: none;
  background-color: #c1eeed;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const LabelWrapper = styled.div`
  padding: 1rem 0;
`;

export const ExpandLabel = styled.p`
  font-size: 1.1rem;
  color: #979797;
  text-decoration: underline;
  cursor: pointer;
`;
