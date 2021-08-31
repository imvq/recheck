import * as types from './types';
import * as styled from './styled';

export default (props: types.IProps) => (
  <styled.Wrapper>
    <styled.Menu>

      <styled.TopBar>
        <styled.Photo src={props.reviewCardData.targetPhotoUrl} />
        <styled.NameWrapper>
          <styled.Name>{props.reviewCardData.targetName}</styled.Name>
        </styled.NameWrapper>
      </styled.TopBar>

      <styled.MenuContent>
        <styled.PlainTextWrapper>
          <styled.PlainText isDimmed>
            Должность:&nbsp;&nbsp;
            <styled.PlainText>
              {props.reviewCardData.targetPosition}
            </styled.PlainText>
          </styled.PlainText>
        </styled.PlainTextWrapper>

        <styled.PlainTextWrapper>
          <styled.PlainText isDimmed>
            Место работы:&nbsp;&nbsp;
            <styled.PlainText>
              {props.reviewCardData.targetCompanyName}
            </styled.PlainText>
          </styled.PlainText>
        </styled.PlainTextWrapper>
      </styled.MenuContent>

    </styled.Menu>
  </styled.Wrapper>
);
