import styled from 'styled-components';

import mixins from 'commons/styles/mixins';

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
  padding-left: calc(${cssVarsLocal.photoWrapperWidth} + 3rem);
  padding-top: .5rem;
  padding-bottom: 2rem;
`;

export const TopBar = styled.div`
  position: relative;
  background-color: #f0f3ff;
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: 600;
  box-sizing: border-box;
  padding: 1.7rem;
  padding-left: 13rem;
`;

export const Photo = styled.img`
  position: absolute;
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  border-radius: 50%;
  margin-left: -8rem;
`;

export const NameWrapper = styled.div`
  padding-left: 2rem;
`;

export const Name = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
`;

export const PlainTextWrapper = mixins.prepared.DefaultWrapper;

export const PlainText = styled.span<{ isDimmed?: boolean; }>`
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 2rem;
  color: ${props => (props.isDimmed ? '#979797' : 'initial')};
`;
