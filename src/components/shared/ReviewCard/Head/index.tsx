import { memo } from 'react';

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

      <styled.TopBarText>{props.reviewCardData.date}</styled.TopBarText>
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
          {props.reviewCardData.targetCompanyName}
        </styled.PlainText>
      </styled.PlainText>
    </styled.PlainTextWrapper>
  );

  const Content = (
    <styled.MenuContent>
      {Position}
      {Company}
    </styled.MenuContent>
  );

  return (
    <styled.Wrapper>
      <styled.Menu>
        {TopBar}
        {props.showTarget && Content}
      </styled.Menu>
    </styled.Wrapper>
  );
}

export default memo(Head);
