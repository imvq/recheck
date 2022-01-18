import { showToast } from 'commons/utils/misc';

export function copyInviteLink(targetShareableId: string) {
  navigator.clipboard.writeText(`${window.location.origin}?inviter=${targetShareableId}`);
  showToast('Ссылка приглашения скопирована.');
}
