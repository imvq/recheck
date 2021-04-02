import { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { AppState, setIsSearchPopupVisible } from 'store';
import SearchPopup from 'components/reusables/SearchPopup';
import { IProps, IStateProps, IDispatchProps } from './types';

const mapStateToProps = (state: AppState): IStateProps => ({
  isSearchPopupVisible: state.interaction.isSearchPopupVisible
});

const mapDispatchToProps: IDispatchProps = {
  setIsSearchPopupVisible
};

/**
 * Wrapper for popups.
 */
const PopupSection: FunctionComponent<IProps> = (props) => (
  <div style={{ position: 'absolute' }}>
    {props.isSearchPopupVisible
      ? <SearchPopup onClose={() => props.setIsSearchPopupVisible(false)} />
      : null}
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(PopupSection);
