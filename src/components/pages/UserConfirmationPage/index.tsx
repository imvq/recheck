import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import controlledHistory from 'utils/routing';
import { AppState, setIsLoginPopupVisible } from 'store';
import { IProps, IStateProps, IDispatchProps } from './types';

const mapStateToProps = (store: AppState): IStateProps => ({
  isAuthorized: store.auth.isAuthorized
});

const mapDispatchToProps: IDispatchProps = {
  setIsLoginPopupVisible
};

const UserConfirmationPage = (props: IProps) => {
  const { uuid } = useParams<{ uuid: string }>();

  useEffect(() => {
    // true       | false          | null
    // authorized | not authorized | check is pending
    if (props.isAuthorized === null) {
      return;
    }

    if (props.isAuthorized) {
      // TODO: Confirm.
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
