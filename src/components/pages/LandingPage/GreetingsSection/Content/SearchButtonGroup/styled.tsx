import styled from 'styled-components';

import { mixins } from 'utils/style.common';
import { ReactComponent as SearchButtonSvg } from 'assets/images/pages/LandingPage/GreetingsSection/Content/SearchButtonGroup/Search.svg';

export const Wrapper = styled.div`
  position: relative;
`;

export const SearchButton = styled(SearchButtonSvg)`
  ${mixins.DefaultButton}

  filter: none;
  width: 16rem;
  position: relative;
  z-index: 1;
`;
