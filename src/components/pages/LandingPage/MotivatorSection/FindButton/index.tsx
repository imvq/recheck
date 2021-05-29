import { connect } from 'react-redux';

import { AppState, setPageLocked, setIsSearchPopupVisible, setIsLoginPopupVisible } from 'store';
import FindCandidateBtn from 'assets/images/pages/LandingPage/MotivatorSection/FindCandidateBtn.svg';
import { IProps, IStateProps, IDispatchProps } from './types';

const mapStateToProps = (store: AppState): IStateProps => ({
  isAuthorized: store.auth.isAuthorized
});

const mapDispatchToProps: IDispatchProps = {
  lockPage: setPageLocked,
  setIsSearchPopupVisible,
  setIsLoginPopupVisible
};

/**
 * Button to redirect to search page from the bottom landing page section.
 */
const FindButton = (props: IProps) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(FindButton);
