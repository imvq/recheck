import { connect } from 'react-redux';

import { createSetSearchPopupDisplayStateAC } from 'store';
import FindCandidateBtn from 'assets/svg/LandingPage/MotivatorView/FindCandidateBtn.svg';
import { FindButtonProps, FindButtonDispatchProps } from './types';

const mapDispatchToProps: FindButtonDispatchProps = ({
  setIsSearchPopupVisible: createSetSearchPopupDisplayStateAC
});

/**
 * Button to display search popup from the bottom landing page section.
 * Presentational component.
 */
const View = ({ onClick }: FindButtonProps) => (
  <img role='none' src={FindCandidateBtn} alt='' onClick={onClick} />
);

/**
 * Wrapper for search button.
 * Container component.
 */
const Container = ({ setIsSearchPopupVisible }: FindButtonDispatchProps) => (
  <View onClick={setIsSearchPopupVisible} />
);

export default connect(null, mapDispatchToProps)(Container);
