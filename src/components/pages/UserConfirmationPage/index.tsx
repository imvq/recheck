import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { IReviewDataReduced } from 'commons/types/general';
import { jumpTo } from 'commons/utils/misc';
import { apiClient, cookieManager } from 'commons/utils/services';
import { AppState, createReview, setIsLoginPopupVisible, setPageUnlocked } from 'store';

import * as types from './types';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  isAuthorized: store.auth.isAuthorized,
  currentProfileId: store.profile.currentProfileInfo.currentId
});

const mapDispatchToProps: types.IDispatchProps = {
  setIsLoginPopupVisible,
  createReview,
  unlockPage: setPageUnlocked
};

function retrievePreparedReview(): IReviewDataReduced | undefined {
  return cookieManager.get('preparedReview');
}

function UserConfirmationPage(props: types.IProps) {
  const { uuid: pageUuid } = useParams<{ uuid: string }>();

  function finalize() {
    props.unlockPage();
    jumpTo('/profile');
  }

  useEffect(() => {
    // true       | false          | null
    // authorized | not authorized | check is pending
    if (props.isAuthorized === null) {
      return;
    }

    if (props.isAuthorized) {
      apiClient.completeRegistration({
        profileId: props.currentProfileId,
        confirmationCode: pageUuid
      })
        .then(() => {
          const preparedReview = retrievePreparedReview();

          if (preparedReview) {
            apiClient.checkIsTargetConnected({
              askerProfileId: props.currentProfileId,
              targetShareableId: preparedReview.targetShareableId
            }).then(checkData => {
              if (checkData.data.success) {
                props.createReview({ ...preparedReview, authorId: props.currentProfileId });
              }
            }).finally(finalize);

            return;
          }

          finalize();
        })
        .catch(() => jumpTo('/404'));
      return;
    }

    if (!props.isAuthorized) {
      props.setIsLoginPopupVisible(true);
      jumpTo('/');
    }
  }, [props.isAuthorized]);

  return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(UserConfirmationPage);
