import styled from 'styled-components';

import cssVars from 'commons/styles/cssVars';

const cssVarsLocal = {
  colorBackground: '#cad0eb',
  shiftDefault: '1rem'
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 1.2rem;
  background-color: ${cssVarsLocal.colorBackground};
  width: ${cssVars.widthMotivatorBadge};
  min-height: 6.5rem;
  border-radius: 1rem;
  filter: drop-shadow(.5rem .3125rem .5rem rgba(0, 0, 0, .25));
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: ${cssVarsLocal.shiftDefault};
  padding-right: ${cssVarsLocal.shiftDefault};
  margin-bottom: 1rem;
  margin-top: .5rem;
`;

export const LogoText = styled.span`
  font-weight: 600;
`;

export const LogoTextColorpickMain = styled(LogoText)`
  color: ${cssVars.colorForegroundPickMain};
`;

export const LogoTextColorpickAux1 = styled(LogoText)`
  color: ${cssVars.colorForegroundPickAux1};
`;

export const ParagraphWrapper = styled.div`
  box-sizing: border-box;
  padding-left: ${cssVarsLocal.shiftDefault};
  padding-right: ${cssVarsLocal.shiftDefault};
  line-height: 1.6rem;
`;

export const Paragraph = styled.p``;
