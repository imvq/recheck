import Head from './Head';
import Body from './Body';

import * as types from './types';
import * as styled from './styled';

/**
 * A card with full review info.
 */
export default (props: types.IProps) => (
  <styled.Wrapper>
    <Head showTarget={props.showTarget} reviewCardData={props.reviewCardData} />
    <Body reviewCardData={props.reviewCardData} />
  </styled.Wrapper>
);
