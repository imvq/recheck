import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { animations, cssVars } from 'utils/style.common';

/**
 * Styled component for main wrapper of cookie popup.
 */
export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 9rem;
  background-color: #e1e6fb;
  z-index: ${cssVars.zIndexPopupCookie};
  border-top: .3rem solid #9ea9d1;

  animation: ${animations.slideIn} 1.2s;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem 5rem;
`;

/**
 * Styled component for cookie popup subsection wrapper.
 */
export const SubsectionWrapper = styled.section`
  height: 100%;
  display: flex;
  align-items: center;

  &:last-child {
    justify-content: flex-end;
  }
`;

/**
 * Styled component for the main popup image.
 */
export const AdaptedImage = styled.img`
  height: 80%;
`;

/**
 * Styled component for info subsection text wrapper.
 */
export const TextWrapper = styled.div`
  margin-left: 2rem;
  font-size: 1.3rem;
  font-weight: 600;
`;

/**
 * Styled component for React-router link with custom styles.
 */
export const StyledLink = styled(Link)`
  color: ${cssVars.colorForegroundPickAux1};
`;

/**
 * Styled component for accept button (as a link).
 */
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
`;
