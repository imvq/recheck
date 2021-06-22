import { Link as ScrollLink } from 'react-scroll';

import * as types from './types';
import * as styled from '../styled';

export default (props: types.IPorps) => (
  <styled.ExpandLabelWrapper>
    <ScrollLink to='Header'>
      <styled.ExpandLabel onClick={props.onClick}>
        Посмотреть все
      </styled.ExpandLabel>
    </ScrollLink>
  </styled.ExpandLabelWrapper>
);
