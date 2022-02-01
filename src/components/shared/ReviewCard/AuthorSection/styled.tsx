import styled from 'styled-components';

export const AuthorSection = styled.div`
  box-sizing: border-box;
  padding: .5rem 5rem;

  display: flex;
  border-bottom: 1px solid #c2c0c0;

  font-size: 1.3rem;
`;

export const EntryWrapper = styled.div`
  padding: 1rem 0;
`;

export interface EntryProps {
  isDimmed?: boolean;
  isFlexile?: boolean;
}

export const Entry = styled.h3<EntryProps>`
  width: ${props => (props.isFlexile ? 'fit-content' : '12rem')};

  display: flex;

  font-weight: 600;
  line-height: 2rem;

  color: ${props => (props.isDimmed ? 'rgb(151, 151, 151)' : 'inherit')};

  &>*:not(:last-child) {
    margin-right: .8rem;
  }
`;
