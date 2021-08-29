import styled from 'styled-components';

import { ReactComponent as LogoFull } from 'assets/images/common/LogoFull.svg';
import { screenBreakpoints } from 'commons/types/unions';
import { respond, wrapped } from 'commons/utils/misc';

export const Wrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 4rem;

  color: #464855;
`;

export const TopWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  ${respond(screenBreakpoints.XS)} {
    justify-content: flex-start;

    padding: 0 0 0 2.3rem;
  }
`;

export const AdjustedLogo = styled(LogoFull)`
  width: 20rem;
`;

export const AdjustedLogoWrapped = wrapped(AdjustedLogo, '0 0 2rem');

export const Title = styled.h1`
  font-size: 3.3rem;
  font-weight: 700;
  line-height: 3.8rem;

  ${respond(screenBreakpoints.XS)} {
    font-size: 3.8rem;
    line-height: 4.2rem;
  }
`;

export const TitleWrapped = wrapped(Title, '0 0 2rem');

export const SubTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 3.3rem;

  ${respond(screenBreakpoints.XS)} {
    font-size: 3.5rem;
    line-height: 4rem;
  }
`;

export const SubTitleWrapped = wrapped(SubTitle, '0 0 2rem');

export const BlockTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 2.8rem;

  ${respond(screenBreakpoints.XS)} {
    font-size: 3.2rem;
    line-height: 3.8rem;
  }
`;

export const BlockTitleWrapped = wrapped(BlockTitle, '0 0 2rem');

export const Text = styled.p`
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 3rem;

  ${respond(screenBreakpoints.XS)} {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

export const TextWrapped = wrapped(Text, '0 0 2rem');

export const Content = styled.div`
  box-sizing: border-box;
  padding: 0 4rem 10rem 10rem;

  ${respond(screenBreakpoints.XS)} {
    padding: 0 0 0 2rem;
  }
`;
