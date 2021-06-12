import styled from 'styled-components';

export const Wrapper = styled.button<{ isPressed: boolean; }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 500;
  color: ${props => (props.isPressed ? '#33c7bb' : 'black')};
`;
