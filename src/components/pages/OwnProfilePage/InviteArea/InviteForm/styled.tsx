import styled from 'styled-components';

export const InviteFormBadge = styled.div`
  position: relative;

  box-sizing: border-box;
  width: 50rem;
  padding: 1.5rem;

  border-radius: 1rem;

  background-color: #e5e5e5;

  font-size: 1.4rem;
  font-weight: 600;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ControlsWrapper = styled.div`
  position: absolute;
  right: 1.5rem;

  display: flex;
  align-items: center;
  
  &>* {
    cursor: pointer;
  }
`;

export const FormPreview = styled.div`
  width: 30rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Warn = styled.div`
  width: 35rem;
  box-sizing: border-box;
  padding: 1rem 5rem;

  background-color: #c1eeed;

  filter: drop-shadow(.2rem .3rem .5rem rgba(0, 0, 0, .25));

  border-radius: 1rem;

  font-size: 1.1rem;
  font-weight: 400;
  color: #555;

  &>strong {
    font-weight: 600;
  }
`;
