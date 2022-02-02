import styled from 'styled-components';

export const CustomCheckBoxWrapper = styled.div`
  width: fit-content;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;

  font-size: 1rem;
  font-weight: 500;

  cursor: pointer;
  user-select: none;

  &>*:not(:last-child) {
    margin-right: .2rem;
  }
`;

export const Input = styled.input`
  margin: 0;

  cursor: pointer;
`;
