import styled, { css } from 'styled-components';

import { cssVars } from 'utils/style.common';
import BoxBase from '../BoxBase';

const mixinsLocal = {
  DefaultInput: css`
    width: 100%;
    font-size: 1.3rem;
    border: calc(${cssVars.thiknessDefault} * 2) solid #c7c7c7;
    border-radius: .6rem;
    box-sizing: border-box;
    padding: .6rem;
    outline: none;

    &:placeholder {
      color: #979797;
    }

    &:focus {
      border-color: #979797;
    }
  `
};

export const Wrapper = styled(BoxBase)``;

export const TitleWrapper = styled.div`
  padding-bottom: 2rem;
  text-align: center;
  line-height: 1.8rem;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
`;

export const SubtitleWrapper = styled.div`
  padding-bottom: 2rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.45rem;
  font-weight: 700;
`;

export const InputGroupWrapper = styled.div`
  width: 35rem;
  display: flex;
  flex-direction: column;
  padding: .8rem;
`;

export const InputDescriptionWrapper = styled.div`
  padding: 0 0 .5rem .8rem;
`;

export const InputDescription = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Input = styled.input`
  ${mixinsLocal.DefaultInput};
`;

export const Select = styled.select`
  ${mixinsLocal.DefaultInput};
`;

export const Option = styled.option`
  ${mixinsLocal.DefaultInput};
  
  height: 2rem;
`;
