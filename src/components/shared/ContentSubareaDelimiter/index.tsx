import styled from 'styled-components';

interface IProps {
  half?: boolean;
  quarter?: boolean;
  eighth?: boolean;
}

export default styled.div<IProps>`
  height: ${props => (props.eighth ? '.5rem' : props.quarter ? '1rem' : props.half ? '2rem' : '4rem')};
`;
