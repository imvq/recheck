import Head from './Head';
import Body from './Body';

import * as misc from './misc';
import * as types from './types';
import * as styled from './styled';

/**
 * A card with full review info.
 */
export default (props: types.IProps) => {
  const parsedReview = misc.parseReviewContent(props.reviewCardData);

  return (
    <styled.Wrapper>
      <Head reviewCardData={parsedReview} showTarget={props.showTarget} />
      <Body reviewCardData={parsedReview} />
    </styled.Wrapper>
  );
};
