import styled from 'styled-components';

import BackgroundSvgPath from 'assets/images/pages/UserConfirmationAwaiterPage/Background.svg';
import cssVars from 'commons/styles/cssVars';
import mixins from 'commons/styles/mixins';

export const Wrapper = styled.div`
  background-image: url(${BackgroundSvgPath});
  background-size: cover;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainFrame = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: .5rem;
  filter: ${cssVars.sectionShadow};
  box-sizing: border-box;
  padding: 2rem;
`;

export const Text = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
`;

export const ButtonWrapper = styled.div`
  padding: 1rem 0 .5rem;

  &:first-of-type {
    padding-top: 2rem;
  }

  &:last-of-type {
    padding-bottom: 1rem;
  }
`;

export const InputWrapper = styled.div`
  width: 21rem;
  padding: 1.5rem 0 1rem;
`;

export const Input = styled.input`
  ${mixins.DefaultInput};

  text-align: center;
`;

export const TextAlert = styled.span`
  color: red;
  font-size: 1.25rem;
  padding: 1rem 0 1rem;
`;
