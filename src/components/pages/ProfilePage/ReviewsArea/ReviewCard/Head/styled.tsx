import styled from 'styled-components';

const cssVarsLocal = {
  photoWrapperWidth: '12rem'
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #c2c0c0;
`;

export const Menu = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: calc(${cssVarsLocal.photoWrapperWidth} + 2rem);
  padding-bottom: 2rem;
`;

export const MenuContentSpansWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

export const MenuContentSpan = styled.span<{ dimmed?: boolean; }>`
  font-size: 1.3rem;
  line-height: 2rem;
  color: ${props => (props.dimmed ? '#979797' : 'black')};
`;
