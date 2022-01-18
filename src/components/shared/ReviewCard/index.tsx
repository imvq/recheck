import { memo } from 'react';

import { isReviewReceived } from 'commons/types';

import Head from './Head';
import Body from './Body';

import * as misc from './misc';
import * as types from './types';
import * as styled from './styled';

/**
 * A card with full review info.
 */
function ReviewCard(props: types.IProps) {
  const parsedReview = isReviewReceived(props.reviewCardData)
    ? misc.parseReviewContent(props.reviewCardData)
    : props.reviewCardData;

  return (
    <styled.ReviewCard>
      <Head reviewCardData={parsedReview} showTarget={props.showTarget} />
      <Body reviewCardData={parsedReview} />
    </styled.ReviewCard>
  );
}

export default memo(ReviewCard);
