import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { jumpTo } from 'commons/utils/misc';
import { apiClient } from 'commons/utils/services';

function UserConfirmationPage() {
  const { uuid: pageUuid } = useParams<{ uuid: string }>();

  useEffect(() => {
    apiClient.completeRegistration(pageUuid)
      .then(() => window.location.replace(window.location.origin))
      .catch(() => jumpTo('/404'));
  }, []);

  return null;
}

export default UserConfirmationPage;
