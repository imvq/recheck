import styled from 'styled-components';

import Header from 'components/reusables/Header';

/**
 * Styled component for main profile page wrapper.
 */
export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template:
    'Header'
    'Content'
    'Footer';
`;

export const TitleWrapper = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  padding: 4rem 0;
  text-align: center;
`;

/**
 * Header with grid applied to.
 */
export const AdaptedHeader = styled(Header)`
  grid-area: Header;
`;

export const ContentWrapper = styled.div`
  height: fit-content;
  min-height: calc(100vh - 8rem - 17.5rem);
  box-sizing: border-box;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
`;
