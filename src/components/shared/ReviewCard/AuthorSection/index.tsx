import { memo } from 'react';

import { IReviewParsed } from 'commons/types';

import * as styled from './styled';

export interface Props {
  reviewCardData: IReviewParsed;
}

function AuthorSection(props: Props) {
  return (
    <styled.AuthorSection>
      <styled.EntryWrapper>
        <styled.Entry isFlexile>
          <styled.Entry isDimmed>Должность:</styled.Entry>
          <styled.Entry isFlexile>{props.reviewCardData.authorPosition}</styled.Entry>
        </styled.Entry>
        <styled.Entry isFlexile>
          <styled.Entry isDimmed>Место работы:</styled.Entry>
          <styled.Entry isFlexile>{props.reviewCardData.authorCompany}</styled.Entry>
        </styled.Entry>
        <styled.Entry isFlexile>
          <styled.Entry isDimmed>Почта:</styled.Entry>
          <styled.Entry isFlexile>{props.reviewCardData.authorEmail}</styled.Entry>
        </styled.Entry>
      </styled.EntryWrapper>
    </styled.AuthorSection>
  );
}

export default memo(AuthorSection);
