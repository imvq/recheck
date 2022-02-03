import { lazy, memo } from 'react';
import { useSelector } from 'react-redux';

import * as store from 'store';

const AskForReviewPopup = lazy(() => import('components/shared/AskForReviewPopup'));
const InvitePopup = lazy(() => import('components/shared/InvitePopup'));

/**
 * Component controlling search popup appearing/disappearing.
 * Non-presentational component.
 */
function PopupManager() {
  const isAskForReviewPopupVisible = useSelector((state: store.AppState) => (
    state.misc.isAskForReviewPopupVisible
  ));
  const isInvitePopupVisible = useSelector((state: store.AppState) => (
    state.misc.isInvitePopupVisible
  ));

  if (isAskForReviewPopupVisible) {
    return <AskForReviewPopup />;
  }

  if (isInvitePopupVisible) {
    return <InvitePopup />;
  }

  return null;
}

export default memo(PopupManager);
