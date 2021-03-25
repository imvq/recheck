import { connect } from 'react-redux';

import { setIsSearchPopupVisible } from 'store';
import FindCandidateBtn from 'assets/images/pages/LandingPage/MotivatorSection/FindCandidateBtn.svg';
import { FindButtonProps, FindButtonDispatchProps } from './types';

const mapDispatchToProps: FindButtonDispatchProps = ({
  setIsSearchPopupVisible
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
const Container = (props: FindButtonDispatchProps) => (
  <View onClick={props.setIsSearchPopupVisible} />
);

export default connect(null, mapDispatchToProps)(Container);