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

export const MenuContent = styled.div<{ showTarget?: boolean; }>`
  display: flex;
  flex-direction: column;
  padding-left: ${
  props => (props.showTarget
    ? `calc(${cssVarsLocal.photoWrapperWidth} + 2rem)`
    : '5rem')
};
  padding-bottom: 2rem;
`;

export const TopBar = styled.div`
  background-color: #f0f3ff;
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: 600;
  box-sizing: border-box;
  padding: 1.7rem;
  padding-left: 13rem;
`;
