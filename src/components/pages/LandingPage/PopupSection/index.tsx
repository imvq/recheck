import { connect } from 'react-redux';

import { AppState, createSetSearchPopupDisplayStateAC } from 'store';
import SearchPopup from 'components/reusables/popups/SearchPopup';
import { PopupViewDispatchProps, PopupViewStateProps } from './types';

const mapStateToProps = (state: AppState): PopupViewStateProps => ({
  isSearchPopupVisible: state.interaction.isSearchPopupVisible
});

const mapDispatchToProps: PopupViewDispatchProps = {
  setIsSearchPopupVisible: createSetSearchPopupDisplayStateAC
};

/**
 * Wrapper for popups.
 * Container component.
 */
const PopupContainer = ({
  isSearchPopupVisible, setIsSearchPopupVisible
}: PopupViewStateProps & PopupViewDispatchProps) => (
  <div style={{ position: 'absolute' }}>
    {isSearchPopupVisible
      ? <SearchPopup onClose={() => setIsSearchPopupVisible(false)} />
      : null}
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainer);
