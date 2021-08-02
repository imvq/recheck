import { memo } from 'react';

import ProfileMenuBadge from 'components/shared/ProfileMenuBadge';

import * as styled from './styled';

export default memo(() => (
  <styled.Wrapper>
    <ProfileMenuBadge isProfilePageAvailable />
  </styled.Wrapper>
));
