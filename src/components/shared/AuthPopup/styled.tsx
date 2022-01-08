import styled from 'styled-components';

import animations from 'commons/styles/animations';
import cssVars from 'commons/styles/cssVars';
import mixins from 'commons/styles/mixins';

import { ReactComponent as CloseCrossSvg } from 'assets/images/common/CloseCross.svg';
import { ReactComponent as GoogleSvg } from './loginButtons/Google.svg';
import { ReactComponent as LinkedInSvg } from './loginButtons/LinkedIn.svg';

const cssVarsLocal = {
  background: '#f0f3ff',
  backgroundActiveRole: '#33c7ba',
  backgroundInactiveRole: '#c4e3ea',
  heightFull: '36.5rem',
  heightPic: '14rem',
  thicknessDefault: '0.078vw'
};

export const AuthPopup = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  z-index: ${cssVars.zIndexPopupLogin};
`;

export const ClickableBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Frame = styled.div`
  animation: ${animations.fadeDefault} .4s;

  min-width: 40rem;
  height: fit-content;
  box-sizing: border-box;
  padding: 0 2rem 4rem;
  background-size: cover;
  background-color: ${cssVarsLocal.background};
  border-radius: .3rem;
  z-index: calc(${cssVars.zIndexPopupLogin} + 1);

  display: flex;
  flex-direction: column;
`;

export const FrameUpperWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const CloseCross = styled(CloseCrossSvg)`
  width: 1.875rem;
  cursor: pointer;
  padding: 1rem;
  margin-right: -2rem;

  &:hover {
    background-color: rgba(0,0,0,.07);
  }

  &:active {
    background-color: rgba(0,0,0,.1);
  }
`;

export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  width: 100%;
  padding: 1rem 3rem 4rem;

  font-size: 1.9rem;
  font-weight: 700;

  color: #555555;
  
  display: flex;
  justify-content: center;
`;

export const Subtitle = styled.h3`
  width: 100%;
  font-size: 1.4rem;
  font-weight: 600;
  
  display: flex;
  justify-content: center;
`;

export const ButtonsGroupWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonsGroupSpan = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0 2rem 0;
  display: flex;
  align-items: center;
`;

export const RoleButtonForm = styled.div`
  width: ${cssVars.widthLoginButton};
  box-sizing: border-box;
  padding: .25rem .4rem;

  background-color: ${cssVarsLocal.backgroundInactiveRole};

  border-radius: .3rem;

  display: flex;
  justify-content: space-around;
`;

interface IRoleButtonProps {
  isActive: boolean;
}

export const RoleButton = styled.button<IRoleButtonProps>`
  cursor: pointer;
  user-select: none;

  background-color: ${props => (props.isActive
    ? cssVarsLocal.backgroundActiveRole : cssVarsLocal.backgroundInactiveRole)};
  color: white;

  box-shadow: ${props => (props.isActive ? '4px 4px 10px 3px rgba(0, 0, 0, .2)' : 'none')};

  box-sizing: border-box;
  padding: .9rem 1.8rem;

  font-size: 1.4rem;
  font-weight: 400;

  border: none;
  border-radius: .3rem;

  z-index: ${props => (props.isActive ? 1 : 0)};
`;

export const GoogleButton = styled(GoogleSvg)`
  ${mixins.DefaultButton};

  width: ${cssVars.widthLoginButton};
  box-sizing: border-box;
  padding: .9rem;
`;

export const LinkedInButton = styled(LinkedInSvg)`
  ${mixins.DefaultButton};

  width: ${cssVars.widthLoginButton};
  box-sizing: border-box;
  padding: .9rem;
`;
