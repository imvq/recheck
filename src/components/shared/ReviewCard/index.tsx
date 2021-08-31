import Head from './Head';
import Body from './Body';

import * as types from './types';
import * as styled from './styled';

/**
 * A card with full review info.
 */
export default (props: types.IProps) => (
  <styled.Wrapper>
    {props.showTarget && <Head reviewCardData={props.reviewCardData} />}
    <Body reviewCardData={props.reviewCardData} />
  </styled.Wrapper>
);
