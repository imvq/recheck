import { lazy, memo } from 'react';
import { useSelector } from 'react-redux';

import * as store from 'store';

const InvitePopup = lazy(() => import('components/shared/InvitePopup'));

/**
 * Component controlling search popup appearing/disappearing.
 * Non-presentational component.
 */
function PopupManager() {
  const isInvitePopupVisible = useSelector((state: store.AppState) => (
    state.interaction.isInvitePopupVisible
  ));

  if (isInvitePopupVisible) {
    return <InvitePopup />;
  }

  return null;
}

export default memo(PopupManager);
