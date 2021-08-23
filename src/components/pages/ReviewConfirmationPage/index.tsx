import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import ApiClient from 'commons/externals/ApiClient';
import controlledHistory from 'commons/utils/routing';

import { AppState, setPageUnlocked, setIsLoginPopupVisible } from 'store';

import * as types from './types';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  isAuthorized: store.auth.isAuthorized,
  currentProfileInfo: store.profile.currentProfileInfo
});

const mapDispatchToProps: types.IDispatchProps = {
  unlockPage: setPageUnlocked,
  setIsLoginPopupVisible
};

function ReviewConfirmationPage(props: types.IProps) {
  const { uuid: pageUuid } = useParams<{ uuid: string }>();

  useEffect(() => {
    // true       | false          | null
    // authorized | not authorized | check is pending
    if (props.isAuthorized === null) {
      return;
    }

    if (props.isAuthorized) {
      ApiClient.bindReviewTarget({
        profileId: props.currentProfileInfo.currentId,
        reviewId: pageUuid
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
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewConfirmationPage);
