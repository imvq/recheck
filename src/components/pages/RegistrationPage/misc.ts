import { IPrepareProfileDto } from 'commons/types/general';
import { apiClient } from 'commons/utils/services';

/**
 * Do something when user finished registering.
 */
export function proceedHandler(
  profileInfo: IPrepareProfileDto,
  additionalOuterActionsCallback: (email: string) => void,
  confirmationsVisibilityCallback: (flag: boolean) => void
) {
  additionalOuterActionsCallback(profileInfo.email);

  apiClient.prepareProfile(profileInfo).finally(() => {
    confirmationsVisibilityCallback(true);
  });
}
