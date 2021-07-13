import * as types from './types';
import * as styled from './styled';

export default (props: types.IProps) => (
  <styled.Wrapper>
    <styled.Menu>
      <styled.TopBar>
        <styled.Photo src={props.reviewCardData.targetPhotoUrl} />
        <styled.Name>{props.reviewCardData.targetName}</styled.Name>
      </styled.TopBar>
      <styled.MenuContent showTarget={props.showTarget} />
    </styled.Menu>
  </styled.Wrapper>
);
