import styled from 'styled-components';

import { mixins } from 'style.common';
import { ReactComponent as SearchButtonSvg } from 'assets/images/pages/LandingPage/GreetingsSection/Content/SearchButtonGroup/Search.svg';

/**
 * Styled component for search button group outer wrapper.
 */
export const Wrapper = styled.div`
  position: relative;
`;

/**
 * Styled component for search group button.
 */
export const SearchButton = styled(SearchButtonSvg)`
  ${mixins.DefaultButton}

  filter: none;
  width: 16rem;
  position: relative;
  z-index: 1;
`;
