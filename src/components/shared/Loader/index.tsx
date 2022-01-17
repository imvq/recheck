import { memo } from 'react';

import styled from 'styled-components';

import { ReactComponent as LoaderSvg } from './images/Loader.svg';

const Loader = styled(LoaderSvg)<{size?: string}>`
  width: ${props => props.size || 'initial'};
  height: ${props => props.size || 'initial'};
`;

export default memo(Loader);
