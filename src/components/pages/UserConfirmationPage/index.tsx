import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Api from 'utils/api';
import controlledHistory from 'utils/routing';
import { AppState, setIsLoginPopupVisible } from 'store';
import { IProps, IStateProps, IDispatchProps } from './types';

const mapStateToProps = (store: AppState): IStateProps => ({
  isAuthorized: store.auth.isAuthorized,
  currentProfileInfo: store.profile.currentProfileInfo
});

const mapDispatchToProps: IDispatchProps = {
  setIsLoginPopupVisible
};

const UserConfirmationPage = (props: IProps) => {
  const { uuid: pageUuid } = useParams<{ uuid: string }>();

  useEffect(() => {
    // true       | false          | null
    // authorized | not authorized | check is pending
    if (props.isAuthorized === null) {
      return;
    }

    if (props.isAuthorized) {
      Api.completeRegistration(props.currentProfileInfo.currentId, pageUuid)
        .then(() => controlledHistory.replace('/'))
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
