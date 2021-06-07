import { Link } from 'react-router-dom';

import Logo from 'components/shared/Logo';
import ProfileMenuBadge from 'components/shared/ProfileMenuBadge';
import { IProps } from './types';
import { Wrapper, LogoWrapper, LoginBadgeWrapper } from './styled';

/**
 * The header.
 */
export default (props: IProps) => (
  <Wrapper>
    {props.withoutLogo ? null : <LogoWrapper><Link to='/'><Logo /></Link></LogoWrapper>}
    <LoginBadgeWrapper><ProfileMenuBadge /></LoginBadgeWrapper>
  </Wrapper>
);
