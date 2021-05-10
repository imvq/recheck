import styled from 'styled-components';

import { cssVars } from 'utils/style.common';
import BackgroundSvgPath from 'assets/images/pages/UserConfirmationAwaiterPage/Background.svg';

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
  padding: 2rem 0 2rem;
`;
