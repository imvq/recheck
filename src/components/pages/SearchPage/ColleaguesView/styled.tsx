import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 3rem;
`;

export const SubTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 3rem;
  color: #8e8d8d;
`;

export const CardsWrapper = styled.div`
  padding-bottom: 5rem;
`;

export const CardWrapper = styled.div`
  float: left;
  box-sizing: border-box;
  padding: 1rem;

  &:nth-child(4n + 1) {
    clear: left;
  }
`;
