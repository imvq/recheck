import styled from 'styled-components';

export const RegistrationPage = styled.div`
  background-color: white;
  min-height: 100%;
  display: grid;
  grid-template:
    'Header'
    'Content' 1fr;
`;

export const ContentWrapper = styled.div`
  grid-area: Content;
  height: fit-content;
  box-sizing: border-box;
  padding: 2rem 20rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
