import styled from 'styled-components';

import { mixins } from 'utils/style.common';

export const BoxBaseWrapper = styled.div`
  width: 50rem;
  height: fit-content;
  background-color: #f0f3ff;
  border-radius: 1.4rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(.3rem .3rem .5rem rgba(0, 0, 0, .2));
`;

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

export const ButtonGroupWrapper = styled.div`
  width: 35rem;
  display: flex;
  justify-content: center;
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

export const TextArea = styled.textarea`
  ${mixins.DefaultInput};

  resize: none;
  min-height: 20rem;
  font-family: Open Sans;
`;
