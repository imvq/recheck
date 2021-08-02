import { memo } from 'react';
import { connect } from 'react-redux';

import { AppState, setPageLocked, setIsSearchPopupVisible, setIsLoginPopupVisible } from 'store';
import FindCandidateBtn from 'assets/images/pages/LandingPage/MotivatorSection/FindCandidateBtn.svg';

import * as types from './types';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  isAuthorized: store.auth.isAuthorized
});

const mapDispatchToProps: types.IDispatchProps = {
  lockPage: setPageLocked,
  setIsSearchPopupVisible,
  setIsLoginPopupVisible
};

/**
 * Button to redirect to search page from the bottom landing page section.
 */
const FindButton = (props: types.IProps) => (
  <img
    role='none'
    src={FindCandidateBtn}
    alt=''
    onClick={
      props.isAuthorized === null
        ? props.lockPage
        : props.isAuthorized
          ? () => props.setIsSearchPopupVisible(true)
          : () => props.setIsLoginPopupVisible(true)
    }
  />
);

export default connect(mapStateToProps, mapDispatchToProps)(memo(FindButton));
