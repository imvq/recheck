import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f0f3ff;
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  padding: 1.7rem;
`;

export const MenuEntryWrapper = styled.div`
  margin: 0 1rem;
`;

export const MenuEntry = styled.span<{ isSelected?: boolean; }>`
  cursor: pointer;
  font-size: 1.3rem;
  text-decoration: ${props => (props.isSelected ? 'underline' : 'none')};
  color: ${props => (props.isSelected ? '#33c7ba' : 'black')};
  user-select: none;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(70%);
  }
`;
