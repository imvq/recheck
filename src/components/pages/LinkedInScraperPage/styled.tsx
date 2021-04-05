import styled from 'styled-components';

import { mixins } from 'utils/style.common';

export const Wrapper = styled.div`
  height: 100%;
  background-color: #fbfbff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 60rem;
  height: fit-content;
  box-sizing: border-box;
  padding: 5rem;
  background-color: white;
  border-radius: 1rem;
  filter: drop-shadow(0 0 2rem rgba(0, 0, 0, .3));
  font-size: 1.5rem;
`;

export const InputLineWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: .5rem;
`;

export const ButtonWrapper = styled.div`
  margin-left: 1rem;
`;

export const Button = styled.button`
  ${mixins.DefaultButton};

  height: 100%;
  font-size: 1.5rem;
  background-color: #28a745;
  border-radius: 1rem;
  color: white;
  border: none;
  outline: none;
  user-select: none;
`;
