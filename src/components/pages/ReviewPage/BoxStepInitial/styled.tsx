import styled, { css } from 'styled-components';

import { cssVars, mixins } from 'utils/style.common';
import BoxBase from '../BoxBase';

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
  ${mixins.DefaultInput};
`;
