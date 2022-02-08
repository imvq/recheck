import styled from 'styled-components';

export const MainToolbar = styled.aside`
  position: relative;
  height: 100%;
  background-color: white;
  font-weight: 400;

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    right: 0;
    box-shadow: 0px 0px 0.25rem 0.063rem rgba(0, 0, 0, 0.2);
  }

  display: grid;
  grid-template:
    'LogoWrapper'    10rem
    'ButtonsWrapper' 1fr;
`;

export const LogoWrapper = styled.div`
  grid-area: LogoWrapper;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 5rem 0 2.5rem;
  background-color: rgb(240, 243, 255);
  border-bottom: 1px solid rgb(196, 196, 196);
`;

export const ButtonsGroupWrapper = styled.div`
  padding: 0 0 2rem;
`;

export const ButtonsWrapper = styled.div`
  grid-area: ButtonsWrapper;

  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;
