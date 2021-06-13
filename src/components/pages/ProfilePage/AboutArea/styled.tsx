import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReviewSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0 3rem;
`;

export const TitleWrapper = styled.div`
  box-sizing: border-box;
  padding: 0 0 3rem;
`;

export const Title = styled.h2<{ isHighlighted?: boolean; }>`
  font-size: 1.5rem;
  font-weight: ${props => (props.isHighlighted ? '600' : '400')};
`;
