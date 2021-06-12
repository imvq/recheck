import { IProps } from './types';
import * as styled from './styled';

export default (props: IProps) => (
  <styled.Wrapper>
    <styled.Menu>
      <styled.TopBar />
      <styled.MenuContent>
        <styled.MenuContentSpansWrapper>
          <styled.MenuContentSpan dimmed>
            Место работы:&nbsp;&nbsp;
            <styled.MenuContentSpan>
              {props.reviewCardData.workplace}
            </styled.MenuContentSpan>
          </styled.MenuContentSpan>
        </styled.MenuContentSpansWrapper>
      </styled.MenuContent>
    </styled.Menu>
  </styled.Wrapper>
);
