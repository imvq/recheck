import React from 'react';
import styled from 'styled-components';

import { animations, mixins } from 'utils/style.common';
import { ScreenBreakpoint } from 'utils/enums';
import { respond } from 'utils/functions';
import SearchStage1Pic from 'assets/images/shared/SearchPopup/SearchStage1Pic.png';
import { ReactComponent as FindButtonSvg } from 'assets/images/shared/SearchPopup/FindCandidate.svg';

const cssVarsLocal = {
  background: '#f0f3ff',
  heightFull: '36.5rem',
  heightPic: '14rem',
  thicknessDefault: '0.078vw'
};

/**
 * Styled component for search poput outer wrapper.
 */
export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  z-index: 3;
`;

/**
 * Styled component for dimmed background for closing popup on click.
 */
export const ClickableBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

/**
 * Styled component for popup frame.
 */
export const Frame = styled.div`
  animation: ${animations.fadeDefault} .4ms;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 76.5rem;
  height: $height-full;
  background-color: ${cssVarsLocal.background};
  z-index: 4;

  ${respond(ScreenBreakpoint.XS)} {
    width: 90%;
    height: calc(${cssVarsLocal.heightFull} - ${cssVarsLocal.heightPic});
    background-color: white;
    border-radius: 1rem;
  }
`;

/**
 * Styled component for stage picture wrapper.
 */
export const StagePictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${cssVarsLocal.heightPic};
  border-bottom: ${cssVarsLocal.thicknessDefault} solid #b8b8b8;

  ${respond(ScreenBreakpoint.XS)} {
    display: none;
  }
`;

/**
 * Placeholder for stage picture styled component.
 */
export const StagePicture = React.memo(() => {
  const Image = styled.img`
    width: 90%;
    height: fit-content;
  `;

  return <Image src={SearchStage1Pic} />;
});

/**
 * Styled component for popup main area wrapper.
 */
export const ContentWrapper = styled.div`
  width: 100%;
  height: calc(${cssVarsLocal.heightFull} - ${cssVarsLocal.heightPic});
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

/**
 * Styled component for popup main area header.
 */
export const Header = styled.h1`
  font-size: 1.8rem;
  text-align: center;
`;

/**
 * Styled component for popup main area input.
 */
export const Input = styled.input`
  min-width: 43rem;
  font-size: 1.45rem;
  padding: .7rem;
  padding-left: .5rem;
  border: calc(2 * ${cssVarsLocal.thicknessDefault}) solid black;
  border-radius: 1rem;
  box-sizing: border-box;
  outline: none;
  background-color: ${cssVarsLocal.background};

  &::placeholder {
    color: #a3a3a3;
  }

  ${respond(ScreenBreakpoint.XS)} {
    min-width: initial;
    width: 90%;
    height: 5rem;
    background-color: white;
    border-radius: 1rem;
    font-size: 2rem;
  }
`;

/**
 * Styled component for desktop search button.
 */
export const FindButtonDesktop = styled(FindButtonSvg)`
  ${mixins.DefaultButton}

  width: 15rem;

  ${respond(ScreenBreakpoint.XS)} {
    display: none;
  }
`;

/**
 * Styled component for mobile search button.
 */
export const FindButtonMobile = styled.button`
  display: none;
  width: 90%;
  height: 5rem;
  font-size: 1.6rem;
  transition: .1s;
  border-radius: 1rem;
  color: white;
  background-color: #3fcabe;
  border: 0;
  outline: none;

  ${respond(ScreenBreakpoint.XS)} {
    display: block;
  }
`;
