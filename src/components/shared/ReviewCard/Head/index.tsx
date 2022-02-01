import { memo } from 'react';

import { IReviewParsed } from 'commons/types';

import * as misc from '../misc';
import * as styled from './styled';

export interface Props {
  reviewCardData: IReviewParsed;
  showTarget?: boolean;
}

function Head(props: Props) {
  const TopBar = (
    <styled.TopBar>
      {props.showTarget && <styled.Photo src={props.reviewCardData.targetPhotoUrl} />}

      <styled.NameWrapper>
        <styled.TopBarText>
          {/* Need to leave this node to provide correct space-between alignment. */}
          {props.showTarget ? props.reviewCardData.targetName : ''}
        </styled.TopBarText>
      </styled.NameWrapper>

      <styled.TopBarText isDimmed>
        {`Дата отзыва: ${misc.getFormattedDate(props.reviewCardData.date)}`}
      </styled.TopBarText>
    </styled.TopBar>
  );

  const Position = (
    <styled.PlainTextWrapper>
      <styled.PlainText isDimmed>
        Должность:&nbsp;&nbsp;
        <styled.PlainText>
          {props.reviewCardData.targetPosition}
        </styled.PlainText>
      </styled.PlainText>
    </styled.PlainTextWrapper>
  );

  const Company = (
    <styled.PlainTextWrapper>
      <styled.PlainText isDimmed>
        Место работы:&nbsp;&nbsp;
        <styled.PlainText>
          {props.reviewCardData.authorCompany}
        </styled.PlainText>
      </styled.PlainText>
    </styled.PlainTextWrapper>
  );

  const Email = (
    <styled.PlainTextWrapper>
      <styled.PlainText isDimmed>
        Почта:&nbsp;&nbsp;
        <styled.PlainText>
          {props.reviewCardData.authorEmail}
        </styled.PlainText>
      </styled.PlainText>
    </styled.PlainTextWrapper>
  );

  const Content = (
    <styled.MenuContent>
      {Position}
      {Company}
      {Email}
    </styled.MenuContent>
  );

  return (
    <styled.Head>
      <styled.Menu>
        {TopBar}
        {props.showTarget && Content}
      </styled.Menu>
    </styled.Head>
  );
}

export default memo(Head);
