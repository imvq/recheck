import { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import FindCandidateSvg from 'assets/images/pages/LandingPage/MotivatorSection/FindCandidateBtn.svg';

import { jumpTo } from 'commons/utils/misc';
import { AppState, setPageLocked, setIsLoginPopupVisible } from 'store';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  isAuthorized: store.auth.isAuthorized
});

const mapDispatchToProps: types.IDispatchProps = {
  lockPage: setPageLocked,
  setIsLoginPopupVisible
};

/**
 * Button to redirect to search page from the bottom landing page section.
 */
function FindButton(props: types.IProps) {
  const [isClickRequested, setIsClickRequested] = useState(false);

  useEffect(() => {
    if (isClickRequested) {
      const pendingFinishedCallback = getPendingFinishedCallback();
      pendingFinishedCallback();
    }
  }, [props.isAuthorized]);

  const onClickWhilePending = () => {
    props.lockPage();
    setIsClickRequested(true);
  };

  const getPendingFinishedCallback = () => {
    return props.isAuthorized
      ? () => jumpTo('/search')
      : () => props.setIsLoginPopupVisible(true);
  };

  const getMainHandler = () => (
    props.isAuthorized === null
      ? onClickWhilePending
      : getPendingFinishedCallback()
  );

  return (
    <styled.Wrapper
      role='none'
      src={FindCandidateSvg}
      alt=''
      onClick={getMainHandler()}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(FindButton));
