import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as styledBase from 'components/shared/Popups';

import ContentSubareaDelimiter from 'components/shared/ContentSubareaDelimiter';
import CustomButton from 'components/shared/CustomButton';

import * as store from 'store';
import * as styledLocal from './styled';
import * as misc from './misc';

const styled = { ...styledBase, ...styledLocal };

function InvitePopup() {
  const shareableId = useSelector((state: store.AppState) => state.profile.shareableId);

  const dispatch = useDispatch<store.AppDispatch>();

  const closeCallback = () => dispatch(store.setIsInvitePopupVisible(false));

  const TopWrapper = (
    <styled.TopWrapper>
      <styled.AdaptedCloseCross onClick={closeCallback} />
    </styled.TopWrapper>
  );

  return (
    <styled.Popup>
      <styled.Frame>
        {TopWrapper}
        <styled.BodyWrapper>
          <styled.Scale />
          <ContentSubareaDelimiter />
          <styled.TextBadge>
            Отправьте ссылку с приглашением кандидату. После регистрации его профиль
            появится у вас в разделе «Мои кандидаты».
          </styled.TextBadge>
          <ContentSubareaDelimiter half />
          <CustomButton onClick={() => misc.copyInviteLink(shareableId as string)}>
            Скопировать ссылку
          </CustomButton>
        </styled.BodyWrapper>
      </styled.Frame>

      <styled.ClickableBackground onClick={closeCallback} />
    </styled.Popup>
  );
}

export default memo(InvitePopup);
