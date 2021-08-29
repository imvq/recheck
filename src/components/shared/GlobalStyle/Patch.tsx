import { createGlobalStyle } from 'styled-components';

import { screenBreakpoints } from 'commons/types/unions';
import { respond } from 'commons/utils/misc';

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
    ${respond(screenBreakpoints.XXXD)} {
      font-size: 0.9rem;
    }

    ${respond(screenBreakpoints.XXD)} {
      font-size: 0.83rem;
    }

    ${respond(screenBreakpoints.XD)} {
      font-size: 0.8rem;
    }

    ${respond(screenBreakpoints.LG)} {
      font-size: 0.7rem;
    }

    ${respond(screenBreakpoints.MD)} {
      font-size: 0.6rem;
    }

    ${respond(screenBreakpoints.SM)} {
      font-size: 0.5rem;
    }
  }
`;
