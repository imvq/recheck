import styled from 'styled-components';

import { cssVars } from 'utils/style.common';
import { ReactComponent as MagnifierSvg } from 'assets/images/pages/SearchPage/SearchField/Magnifier.svg';

const cssVarsLocal = {
  boxPadding: '1rem'
};

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 65rem;
  height: fit-content;
  display: flex;
  padding: ${cssVarsLocal.boxPadding};
  box-sizing: border-box;
  font-size: 1.2rem;
  border-radius: 1rem;
  outline: none;
  background-color: white;
  border: solid ${cssVars.thiknessDefault} rgb(143, 143, 143);
  box-shadow:
    ${cssVars.thiknessDefault}
    ${cssVars.thiknessDefault}
    calc(${cssVars.thiknessDefault} * 7)
    0px rgba(143, 143, 143, .65)
  ;

  &::placeholder {
    color: #808080;
  }

  &:focus {
    box-shadow:
      ${cssVars.thiknessDefault}
      ${cssVars.thiknessDefault}
      calc(${cssVars.thiknessDefault} * 20)
      0px rgba(100, 100, 100, .65)
    ;
  }
`;

export const AdaptedMagnifier = styled(MagnifierSvg)`
  position: absolute;
  height: 3rem;
  right: calc(${cssVarsLocal.boxPadding} * 2);
`;
