import styled from 'styled-components';

import { cssVars } from 'utils/style.common';

export const Wrapper = styled.div`
  background-color: #f0f3ff;
  font-size: 1.3rem;
  padding: 1rem 0 0 ${cssVars.profilePhotoWrapperWidth};
`;

export const MenuContentTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  line-height: 4rem;
`;
