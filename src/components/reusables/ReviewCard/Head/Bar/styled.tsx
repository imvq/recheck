import styled from 'styled-components';

import { ReviewStatus } from 'utils/enums';

export const Wrapper = styled.div<{ status: ReviewStatus; }>`
  background-color: ${
  props => (props.status === ReviewStatus.CONFIRMED ? '#e0f7f6'
    : props.status === ReviewStatus.REJECTED ? '#fab6b6'
      : '#fdecc5')
};
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: 600;
  box-sizing: border-box;
  padding: 1.7rem;
  padding-left: 13rem;
`;

export const MenuEntryWrapper = styled.div`
  margin: 0 1rem;
`;

export const MenuEntry = styled.span`
  font-size: 1.3rem;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(70%);
  }
`;
