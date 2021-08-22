import styled from 'styled-components';

import { Link } from 'react-router-dom';

import cssVars from 'commons/styles/cssVars';

import { ReactComponent as MainImage } from 'assets/images/pages/NotFoundPage/MainImage.svg';

import { IStyledSpanProps } from './types';

export const Wrapper = styled.div`
  display: grid;
  grid-template:
    'Header      Header'       8rem
    'InfoWrapper ImageWrapper' calc(100vh - 8rem) / 50% 50%;
`;

export const HeaderWrapper = styled.div`
  grid-area: Header;
`;

export const InfoJustificationWrapper = styled.div`
  grid-area: InfoWrapper;
  display: flex;
  justify-content: flex-end;
`;

export const InfoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  font-weight: 700;
  color: #555555;
`;

export const Title = styled.h1`
  font-size: 7rem;
`;

export const Subtitle = styled(Title)`
  font-size: 2rem;
`;

export const Span = styled.span<IStyledSpanProps>`
  font-size: ${props => (props.increased ? '8rem' : props.reduced ? '1.8rem' : '5rem')};
  color: ${props => (props.pale ? '#bac5f4' : 'inherit')};
  font-weight: ${props => (props.thin ? '600' : 'inherit')};
`;

export const ErrorSpanWrapper = styled.div`
  margin: 5rem 0;
`;

export const LinksWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
`;

export const AdaptedLink = styled(Link)`
  color: ${cssVars.colorForegroundPickAux1};
  font-size: 1.2rem;
  line-height: 3rem;
`;

export const ImageWrapper = styled.div`
  grid-area: ImageWrapper;
  display: flex;
`;

export const AdaptedImage = styled(MainImage)`
  max-height: 100%;
  max-width: 100%;
`;
