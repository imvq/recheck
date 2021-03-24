import { connect } from 'react-redux';

import { AppState, setIsSearchPopupVisible } from 'store';
import SearchPopup from 'components/reusables/SearchPopup';
import { PopupViewDispatchProps, PopupViewStateProps } from './types';

const mapStateToProps = (state: AppState): PopupViewStateProps => ({
  isSearchPopupVisible: state.interaction.isSearchPopupVisible
});

const mapDispatchToProps: PopupViewDispatchProps = {
  setIsSearchPopupVisible
};

/**
 * Wrapper for popups.
 * Container component.
 */
const PopupContainer = (props: PopupViewStateProps & PopupViewDispatchProps) => (
  <div style={{ position: 'absolute' }}>
    {props.isSearchPopupVisible
      ? <SearchPopup onClose={() => props.setIsSearchPopupVisible(false)} />
      : null}
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainer);
