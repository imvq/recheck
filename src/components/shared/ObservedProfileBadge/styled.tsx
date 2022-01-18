import styled from 'styled-components';

import cssVars from 'commons/styles/cssVars';
import mixins from 'commons/styles/mixins';

export const ObservedProfileBadge = styled.div`
  ${mixins.DefaultButton};

  position: relative;

  cursor: default;
  user-select: none;
  filter: drop-shadow(.2rem .2rem .5rem rgba(0, 0, 0, .2));

  width: 50rem;
  height: fit-content;

  background-color: #f0f3ff;

  border-radius: 1rem;

  display: flex;

  transition: .3s;

  &:hover {
    opacity: .8;
    filter: alpha(80);
  }

  &:active {
    opacity: .7;
    filter: alpha(opacity=70);
  }
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

export const DemoLabel = styled.div`
  position: absolute;
  right: 3.5rem;
  top: 2rem;

  color: ${cssVars.colorForegroundPickAux1};

  display: flex;
  align-items: center;

  font-size: 1.2rem;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
`;
