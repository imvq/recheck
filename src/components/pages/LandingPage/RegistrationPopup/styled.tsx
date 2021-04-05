import styled, { css } from 'styled-components';

import { cssVars } from 'utils/style.common';
import { ReactComponent as LogoutButtonSvg } from 'assets/images/pages/LandingPage/RegistrationPopup/LogoutButton.svg';
import { ReactComponent as ProceedButtonSvg } from 'assets/images/pages/LandingPage/RegistrationPopup/ProceedButton.svg';

const mixinsLocal = {
  Button: css`
    &:hover {
      filter: brightness(90%);
    }

    &:active {
      filter: brightness(70%);
    }
  `
};

export const Frame = styled.div`
  width: 47rem;
  height: fit-content;
  box-sizing: border-box;
  padding: 3rem 10rem;
  background-color: #eef0fa;
  border-radius: .3rem;
  z-index: ${cssVars.zIndexDimmedContent};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  padding: 1rem 0 0;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #555555;
`;

export const DescriptionWrapper = styled.div`
  padding: 2rem 0 2rem;
`;

export const Description = styled.p<{ isReduced?: boolean; }>`
  font-size: ${props => (props.isReduced ? '1.2rem' : '1.4rem')};
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.4rem;
  border: calc(${cssVars.thiknessDefault} * 2) solid #979797;
  border-radius: .6rem;
  box-sizing: border-box;
  padding: .6rem;
  outline: none;

  &:placeholder {
    color: #979797;
  }

  &:focus {
    border-color: #c7c7c7;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 1rem;
`;

export const ProceedButton = styled(ProceedButtonSvg)`
  ${mixinsLocal.Button};
`;

export const LogoutButton = styled(LogoutButtonSvg)`
  ${mixinsLocal.Button};
`;
