import { memo } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import * as types from './types';
import * as styled from '../styled';

function CompaniesExpansionLabel(props: types.IPorps) {
  return (
    <styled.ExpandLabelWrapper>
      <ScrollLink to='Header'>
        <styled.ExpandLabel onClick={props.onClick}>
          Посмотреть все
        </styled.ExpandLabel>
      </ScrollLink>
    </styled.ExpandLabelWrapper>
  );
}

export default memo(CompaniesExpansionLabel);
