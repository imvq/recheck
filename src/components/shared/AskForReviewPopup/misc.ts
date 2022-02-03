import { showToast } from 'commons/utils/misc';

export function copyReviewLink(targetShareableId: string) {
  navigator.clipboard.writeText(`${window.location.origin}/review/create/${targetShareableId}`);
  showToast('Ссылка на оставление отзыва скопирована.');
}
