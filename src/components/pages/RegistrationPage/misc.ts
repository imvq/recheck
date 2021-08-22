import ApiClient from 'commons/externals/ApiClient';

import { IPrepareProfileDto } from 'commons/types/general';

/**
 * Do something when user finished registering.
 */
export function proceedHandler(
  profileInfo: IPrepareProfileDto,
  additionalOuterActionsCallback: (email: string) => void,
  confirmationsVisibilityCallback: (flag: boolean) => void
) {
  additionalOuterActionsCallback(profileInfo.email);

  ApiClient.prepareProfile(profileInfo).finally(() => {
    confirmationsVisibilityCallback(true);
  });
}
