import styled from 'styled-components';

import mixins from 'commons/styles/mixins';

export const BoxBaseWrapper = styled.div`
  width: 64rem;
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

interface ISubtitleProps {
  isReduced?: boolean;
}

export const Subtitle = styled.h2<ISubtitleProps>`
  font-size: ${props => (props.isReduced ? '1.2rem' : '1.45rem')};
  font-weight: 700;
`;

export const SimpleText = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
`;

interface InputGroupWrapperProps {
  isInbox?: boolean;
}

export const InputGroupWrapper = styled.div<InputGroupWrapperProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: ${props => (props.isInbox ? 'initial' : '.8rem 11rem .8rem 11rem')};
`;

export const InputRowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StepWrapper = styled.div`
  padding: 2rem 0;
  font-size: 1.2rem;
`;

export const StepText = styled.span``;

export const ButtonGroupWrapper = styled.div`
  width: 35rem;
  display: flex;
  justify-content: space-evenly;
  padding: .8rem;
`;

export const MarkSelectorDescriptionWrapper = styled.div`
  width: 100%;
  padding: 0 0 2rem 3.8rem;
`;

export const MarkSelectorDescription = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const MarkSelectorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0 2rem;
`;

const InputElementWrapper = styled.div`
  padding: 0 0 .5rem .8rem;
`;

export const InputDescriptionWrapper = styled(InputElementWrapper)``;

export const InputWrapper = styled(InputElementWrapper)``;

interface InputDescriptionProps {
  reducedAccent?: boolean;
}

export const InputDescription = styled.span<InputDescriptionProps>`
  font-size: 1.25rem;
  font-weight: ${props => (props.reducedAccent ? '400' : '600')};

  &>*:not(:last-child) {
    margin-right: .4rem;
  }
`;

export const InputWithOptionsWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = mixins.prepared.DefaultInput;

interface ITextAreaProps {
  isReduced?: boolean;
}

export const TextArea = styled.textarea<ITextAreaProps>`
  ${mixins.DefaultInput};

  resize: none;
  min-height: ${props => (props.isReduced ? '5rem' : '20rem')};
  font-family: Open Sans;
`;

export const CommentArea = styled(TextArea)`
  min-height: 12rem;
`;

export const TextAlert = styled.span<{ isHighlighted?: boolean; }>`
  ${props => (props.isHighlighted ? 'color: red;' : '')}
  width: 40rem;
  font-size: 1.25rem;
  padding: 1rem 0 1rem;
`;
