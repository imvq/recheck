import styled from 'styled-components';

import cssVars from 'commons/styles/cssVars';
import mixins from 'commons/styles/mixins';

export const ProfileMenuBadge = styled.div`
  position: relative;
  z-index: ${cssVars.zIndexLoginBadge};
`;

interface ILoginButtonProps {
  isAuthorized: boolean;
  isTriggered: boolean;
}

export const LoginButton = styled.img<ILoginButtonProps>`
  cursor: pointer;
  transition: .35s;
  filter: drop-shadow(.2rem .3rem .5rem rgba(0, 0, 0, .25));

  opacity: ${props => (props.isTriggered ? '.75' : 'initial')};

  &:hover {
    opacity: ${props => (props.isTriggered ? '.75' : '.80')};
    filter: alpha(opacity=${props => (props.isTriggered ? '75' : '80')});
  }

  &:active {
    opacity: .75;
    filter: alpha(opacity=75);
  }

  width: calc(
    ${cssVars.greetingsViewHeadEdgeElemsWidthBase}
    - ${cssVars.widthOffsetProfileBadge}
  );

  border: .3rem solid ${props => (props.isAuthorized ? 'orange' : '#cfcfcf')};
  border-radius: 50%;
`;

export const Menu = styled.ul<{ isExpanded: boolean }>`
  display: ${props => (props.isExpanded ? 'block' : 'none')};
  position: absolute;
  right: 0;
  user-select: none;
  border-radius: .4rem;
`;

export const MenuEntry = styled.li`
  cursor: pointer;
  width: 22rem;
  font-weight: 600;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: .8rem;
  background-color: #f0f3ff;
  filter: drop-shadow(.2rem .4rem .2rem rgba(0, 0, 0, .25));

  &:hover {
    background-color: #cacdd6;
  }

  &:active {
    background-color: #9fa1a7;
  }
`;

export const SvgWrapper = styled.div`
  margin-right: .2rem;

  &>svg {
    height: 3rem;
  }
`;
