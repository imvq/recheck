import { connect } from 'react-redux';

import { createSetSearchPopupDisplayStateAC } from 'store';
import { Wrapper, SearchButton } from './styled';
import RocketGroup from './RocketGroup';
import { SearchButtonGroupProps, SearchButtonGroupDispatchProps } from './types';

const mapDispatchToProps: SearchButtonGroupDispatchProps = {
  setIsSearchPopupVisible: createSetSearchPopupDisplayStateAC
};

/**
 * Group of Programmed SVG components representing a search button
 * and a decorated SVG rocket attached to.
 * Presentational component.
 */
const View = ({ onClick }: SearchButtonGroupProps) => (
  <Wrapper>
    <SearchButton onClick={onClick} />
    <RocketGroup />
  </Wrapper>
);

/**
 * Wrapper for search button group using search popup state.
 * Container component.
 */
const Container = ({ setIsSearchPopupVisible }: SearchButtonGroupDispatchProps) => (
  <View onClick={() => setIsSearchPopupVisible(true)} />
);

export default connect(null, mapDispatchToProps)(Container);
