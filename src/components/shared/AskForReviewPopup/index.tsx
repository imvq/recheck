import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as styledBase from 'components/shared/Popups';

import ContentSubareaDelimiter from 'components/shared/ContentSubareaDelimiter';
import CustomButton from 'components/shared/CustomButton';

import * as store from 'store';
import * as styledLocal from './styled';
import * as misc from './misc';

const styled = { ...styledBase, ...styledLocal };

function AskForReviewPopup() {
  const shareableId = useSelector((state: store.AppState) => state.profile.shareableId);

  const dispatch = useDispatch<store.AppDispatch>();

  const closeCallback = () => dispatch(store.setIsAskForReviewPopupVisible(false));

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
            Для подтверждения Ваших мест работы отправьте ссылку
            с опросником 2-м коллегам, например, с текущей и прошлой компании.
            После заполнения данных и подтверждения их мест работы, данные из опросника
            будут доступны для просмотра в разделе “Мой профиль”.
          </styled.TextBadge>
          <ContentSubareaDelimiter />
          <CustomButton onClick={() => misc.copyReviewLink(shareableId!)}>
            Скопировать ссылку
          </CustomButton>
        </styled.BodyWrapper>
      </styled.Frame>

      <styled.ClickableBackground onClick={closeCallback} />
    </styled.Popup>
  );
}

export default memo(AskForReviewPopup);
