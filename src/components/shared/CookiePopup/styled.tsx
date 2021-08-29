import styled from 'styled-components';
import { Link } from 'react-router-dom';

import animations from 'commons/styles/animations';
import cssVars from 'commons/styles/cssVars';
import { screenBreakpoints } from 'commons/types/unions';
import { respond } from 'commons/utils/misc';
import { ReactComponent as CloseSvg } from 'assets/images/shared/CookiePopup/Close.svg';

export const FixedJustifier = styled.div`
  position: fixed;
  z-index: ${cssVars.zIndexPopupCookie};
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 9rem;
  background-color: #e1e6fb;
  border-top: .3rem solid #9ea9d1;

  animation: ${animations.slideIn} 1.2s;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem 5rem;

  ${respond(screenBreakpoints.XS)} {
    background-color: white;
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.45);
    border: none;
    border-radius: 1rem;
    width: fit-content;
    margin: 1rem;
    padding: 1rem;

    animation: ${animations.slideIn} .2s;
  }
`;

export const SubsectionWrapper = styled.section`
  height: 100%;
  display: flex;
  align-items: center;

  &:last-child {
    justify-content: flex-end;
  }
`;

export const AdaptedImage = styled.img`
  height: 80%;

  ${respond(screenBreakpoints.XS)} {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  margin-left: 2rem;
  font-size: 1.3rem;
  font-weight: 600;

  ${respond(screenBreakpoints.XS)} {
    line-height: 1.7rem;
  }
`;

export const StyledLink = styled(Link)`
  color: ${cssVars.colorForegroundPickAux1};
`;

export const LinkButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
  user-select: none;
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: underline;
  color: ${cssVars.colorForegroundPickAux1};

  ${respond(screenBreakpoints.XS)} {
    display: none;
  }
`;

export const CloseButtonWrapper = styled.div`
  display: none;
  margin-left: 1rem;

  ${respond(screenBreakpoints.XS)} {
    display: unset;
    height: 90%;
  }
`;

export const CloseButton = styled(CloseSvg)`
  height: 100%;

  &:active {
    filter: brightness(10%);
  }
`;
