import { memo } from 'react';

import * as styled from './styled';

function LinkedInLoginButton() {
  return (
    <styled.LinkedInLoginButton>
      <styled.AdaptedLinkedInIcon />
      <span>LinkedIn</span>
    </styled.LinkedInLoginButton>
  );
}

export default memo(LinkedInLoginButton);
