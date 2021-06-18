import styled from 'styled-components';

export const Wrapper = styled.aside`
  height: 100%;
  background-color: white;
  font-weight: 400;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

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
  padding-top: 2.5rem;
`;

export const ButtonWrapper = styled.div`
  padding: 1.2rem 0 0 1rem;
  display: flex;
`;
