import styled from 'styled-components';

import { cssVars } from 'utils/style.common';

export const Wrapper = styled.div`
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
  width: 50rem;
  height: fit-content;
  padding: 5rem 2rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: ${cssVars.sectionShadow};
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: .5rem;
`;
