import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 50rem;
  height: fit-content;
  background-color: #f0f3ff;
  border-radius: 1rem;
  display: flex;
  filter: drop-shadow(.2rem .2rem .5rem rgba(0, 0, 0, .2));
`;

export const PhotoWrapper = styled.div`
  height: 10rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-left: 2rem;
`;

export const Photo = styled.img`
  height: 60%;
  max-height: 60%;
  object-fit: cover;
  border-radius: 50%;
`;

export const ContentWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  line-height: 2rem;
  font-weight: 600;
`;

export const Entry = styled.span<{ isDimmed?: boolean; }>`
  font-size: 1.1rem;
  line-height: 2rem;
  color: ${props => (props.isDimmed ? 'grey' : 'black')};
`;
