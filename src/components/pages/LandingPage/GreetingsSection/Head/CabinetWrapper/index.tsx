import ProfileMenuBadge from 'components/shared/ProfileMenuBadge';

import * as styled from './styled';

/**
 * Cabinet wrapper.
 */
export default () => (
  <styled.Wrapper>
    <ProfileMenuBadge isProfilePageAvailable />
  </styled.Wrapper>
);
