import { memo } from 'react';

import * as types from './types';
import * as styled from './styled';

function GoogleLoginButton(props: types.IProps) {
  return (
    <styled.GoogleLoginButton onClick={props.onClick}>
      <styled.AdaptedGoogleIcon />
      <span>Google</span>
    </styled.GoogleLoginButton>
  );
}

export default memo(GoogleLoginButton);
