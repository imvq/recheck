import { ITextAreaEvent } from 'commons/types/general';
import { jumpTo } from 'commons/utils/misc';

export function textAreaHandler(event: ITextAreaEvent, setter: (value: string) => void) {
  setter(event.target.value);
}

export function postRedirect(requestedUserShareableId: string | null) {
  if (requestedUserShareableId) {
    jumpTo('/profile/observe/', requestedUserShareableId);
    return;
  }

  jumpTo('/profile');
}

export function saveReviewLocally(review: string) {
  localStorage.setItem('preparedReview', review);
}
