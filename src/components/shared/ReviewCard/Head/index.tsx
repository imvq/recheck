import { memo } from 'react';

import * as misc from '../misc';
import * as types from './types';
import * as styled from './styled';

function Head(props: types.IProps) {
  const TopBar = (
    <styled.TopBar>
      {props.showTarget && <styled.Photo src={props.reviewCardData.targetPhotoUrl} />}

      <styled.NameWrapper>
        <styled.TopBarText>
          {/* Need to leave this node to provide correct space-between alignment. */}
          {props.showTarget ? props.reviewCardData.targetName : ''}
        </styled.TopBarText>
      </styled.NameWrapper>

      <styled.TopBarText>{misc.getFormattedDate(props.reviewCardData.date)}</styled.TopBarText>
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
          {props.reviewCardData.authorCompanySnapshot}
        </styled.PlainText>
      </styled.PlainText>
    </styled.PlainTextWrapper>
  );

  const Email = (
    <styled.PlainTextWrapper>
      <styled.PlainText isDimmed>
        Почта:&nbsp;&nbsp;
        <styled.PlainText>
          {props.reviewCardData.authorEmailSnapshot}
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
