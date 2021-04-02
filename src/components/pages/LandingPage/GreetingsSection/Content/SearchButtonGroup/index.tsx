import { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { setIsSearchPopupVisible } from 'store';
import { Wrapper, SearchButton } from './styled';
import RocketGroup from './RocketGroup';
import { IProps, IDispatchProps } from './types';

const mapDispatchToProps: IDispatchProps = {
  setIsSearchPopupVisible
};

/**
 * Group of Programmed SVG components representing a search button
 * and a decorated SVG rocket attached to.
 */
const SearchButtonGroup: FunctionComponent<IProps> = (props) => (
  <Wrapper onClick={() => props.setIsSearchPopupVisible(true)}>
    <SearchButton onClick={props.onClick} />
    <RocketGroup />
  </Wrapper>
);

export default connect(null, mapDispatchToProps)(SearchButtonGroup);
