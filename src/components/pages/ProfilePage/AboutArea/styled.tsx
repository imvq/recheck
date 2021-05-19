import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0 3rem;
`;

export const Title = styled.h2<{ isHighlighted?: boolean; }>`
  font-size: 1.5rem;
  font-weight: ${props => (props.isHighlighted ? '600' : '400')};
`;
