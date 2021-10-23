import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { jumpTo } from 'commons/utils/misc';
import { apiClient } from 'commons/utils/services';
import { AppState } from 'store';

import * as types from './types';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  isAuthorized: store.profile.isAuthorized
});

function UserConfirmationPage(props: types.IProps) {
  const { uuid: pageUuid } = useParams<{ uuid: string }>();

  useEffect(() => {
    // Perform confirmation only after the authorization check.
    if (props.isAuthorized !== null) {
      apiClient.completeRegistration({ confirmationCode: pageUuid })
        .then(() => jumpTo(props.isAuthorized ? '/profile' : '/'))
        .catch(() => jumpTo('/404'));
    }
  }, [props.isAuthorized]);

  return null;
}

export default connect(mapStateToProps)(UserConfirmationPage);
