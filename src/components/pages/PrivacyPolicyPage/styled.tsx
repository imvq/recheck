import styled from 'styled-components';

import { ReactComponent as LogoFull } from 'assets/images/common/LogoFull.svg';

export const Wrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4rem;
`;

export const AdjustedLogoFull = styled(LogoFull)`
  width: 20rem;
  padding-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.7rem;
  font-weight: 600;
  line-height: 2.7rem;
`;

export const Content = styled.div`
  
`;
