import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardsWrapper = styled.div``;

export const CardWrapper = styled.div`
  float: left;
  box-sizing: border-box;
  padding: 1rem;

  &:nth-child(4n + 1) {
    clear: left;
  }
`;
