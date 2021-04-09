import styled from 'styled-components';

const cssVarsLocal = {
  defaultWidth: '6rem',
  emptyBackground: '#c9c7eb',
  filledBackground: '#4b45bd',
};

const dotRadius = `calc(${cssVarsLocal.defaultWidth} / 2.4)`;

export const Wrapper = styled.div`
  width: 54rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PipelineWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
`;

export const Pipe = styled.div<{ isFilled?: boolean; }>`
  width: ${cssVarsLocal.defaultWidth};
  height: 1.1rem;
  background-color: ${props => (
    props.isFilled ? cssVarsLocal.filledBackground : cssVarsLocal.emptyBackground
  )};
`;

export const StyledPoint = styled.p<{ isFilled?: boolean; offset: number }>`
  position: absolute;
  left: calc(${props => props.offset} * ${cssVarsLocal.defaultWidth} - ${dotRadius} / 2);
  width: ${dotRadius};
  height: ${dotRadius};
  border-radius: 50%;
  color: white;
  background-color: ${props => (
    props.isFilled ? cssVarsLocal.filledBackground : cssVarsLocal.emptyBackground
  )};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 700;
  user-select: none;
  cursor: pointer;

  &:hover {
    filter: brightness(95%);
  }

  &:active {
    filter: brightness(80%);
  }
`;

export const LabelsWrapper = styled.div`
  width: calc(100% + ${dotRadius});
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-top: 1.5rem;
`;

export const Label = styled.span`
  width: ${cssVarsLocal.defaultWidth};
  text-align: center;
  font-size: 1.1rem;
`;

export const TitleWrapper = styled(LabelsWrapper)`
  padding-bottom: 2rem;
  padding-top: 0;
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  color: grey;
`;
