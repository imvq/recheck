import ProfileMenuBadge from 'components/shared/ProfileMenuBadge';

import * as types from './types';
import * as styled from './styled';

/**
 * The header.
 */
export default (props: types.IProps) => (
  <styled.Wrapper id='top-scroll-anchor'>
    <styled.LoginBadgeWrapper>
      <ProfileMenuBadge isProfilePageAvailable={props.isProfilePageAvailable} />
    </styled.LoginBadgeWrapper>
  </styled.Wrapper>
);
