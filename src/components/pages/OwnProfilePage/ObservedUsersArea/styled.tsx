import styled from 'styled-components';

import mixins from 'commons/styles/mixins';

export const ObservedUsersArea = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0 3rem;
`;

export const Title = styled.h2<{ isHighlighted?: boolean; }>`
  font-size: 1.5rem;
  font-weight: ${props => (props.isHighlighted ? '600' : '400')};
`;

export const LoadButtonWrapper = styled.div`
  width: 50rem;

  display: flex;
  justify-content: flex-end;
`;

export const LoadButton = styled.p`
  ${mixins.DefaultButton};

  display: flex;
  justify-content: center;
  align-items: center;

  &>*:not(:last-child) {
    margin-right: .4rem;
  }
`;
