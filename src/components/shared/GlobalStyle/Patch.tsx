import { createGlobalStyle } from 'styled-components';

import { ScreenBreakpoint } from 'commons/utils/enums';
import { respond } from 'commons/utils/functions';

/**
 * Global patch style component.
 */
export default createGlobalStyle`
  html, body, #root {
    height: 100%;
    font-size: 16px;
    font-family: Open Sans, Sans-Serif;
  }

  body {
    overflow-x: hidden;
  }

  :root {
    ${respond(ScreenBreakpoint.XXXD)} {
      font-size: 0.9rem;
    }

    ${respond(ScreenBreakpoint.XXD)} {
      font-size: 0.83rem;
    }

    ${respond(ScreenBreakpoint.XD)} {
      font-size: 0.8rem;
    }

    ${respond(ScreenBreakpoint.LG)} {
      font-size: 0.7rem;
    }

    ${respond(ScreenBreakpoint.MD)} {
      font-size: 0.6rem;
    }

    ${respond(ScreenBreakpoint.SM)} {
      font-size: 0.5rem;
    }
  }
`;
