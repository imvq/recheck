import { IProps } from './types';
import Head from './Head';
import Body from './Body';
import { Wrapper } from './styled';

/**
 * A card with full review info.
 */
export default (props: IProps) => (
  <Wrapper>
    <Head reviewCardData={props.reviewCardData} />
    <Body reviewCardData={props.reviewCardData} />
  </Wrapper>
);
