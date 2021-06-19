import ProfileMenuBadge from 'components/shared/ProfileMenuBadge';

import * as types from './types';
import * as styled from './styled';

/**
 * The header.
 */
export default (props: types.IProps) => (
  <styled.Wrapper id={props.id}>
    <styled.LoginBadgeWrapper><ProfileMenuBadge /></styled.LoginBadgeWrapper>
  </styled.Wrapper>
);
