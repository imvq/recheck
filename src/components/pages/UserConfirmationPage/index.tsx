import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import ApiClient from 'commons/externals/ApiClient';
import controlledHistory from 'commons/utils/routing';
import { AppState, setIsLoginPopupVisible, setPageUnlocked } from 'store';

import * as types from './types';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  isAuthorized: store.auth.isAuthorized,
  currentProfileInfo: store.profile.currentProfileInfo
});

const mapDispatchToProps: types.IDispatchProps = {
  setIsLoginPopupVisible,
  unlockPage: setPageUnlocked
};

const UserConfirmationPage = (props: types.IProps) => {
  const { uuid: pageUuid } = useParams<{ uuid: string }>();

  useEffect(() => {
    // true       | false          | null
    // authorized | not authorized | check is pending
    if (props.isAuthorized === null) {
      return;
    }

    if (props.isAuthorized) {
      ApiClient.completeRegistration({
        profileId: props.currentProfileInfo.currentId,
        confirmationCode: pageUuid
      })
        .then(() => {
          props.unlockPage();
          controlledHistory.replace('/profile');
        })
        .catch(() => controlledHistory.replace('/404'));
      return;
    }

    if (!props.isAuthorized) {
      props.setIsLoginPopupVisible(true);
      controlledHistory.replace('/');
    }
  }, [props.isAuthorized]);

  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(UserConfirmationPage);
