import { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { AppState, setPageLocked, setIsLoginPopupVisible, setIsSearchPopupVisible } from 'store';
import { Wrapper, SearchButton } from './styled';
import RocketGroup from './RocketGroup';
import { IProps, IStateProps, IDispatchProps } from './types';

const mapStateToProps = (store: AppState): IStateProps => ({
  isAuthorized: store.auth.isAuthorized
});

const mapDispatchToProps: IDispatchProps = {
  lockPage: setPageLocked,
  setIsLoginPopupVisible,
  setIsSearchPopupVisible
};

/**
 * Group of Programmed SVG components representing a search button
 * and a decorated SVG rocket attached to.
 */
const SearchButtonGroup: FunctionComponent<IProps> = (props) => (
  <Wrapper onClick={
    props.isAuthorized === null
      ? props.lockPage
      : props.isAuthorized
        ? () => props.setIsSearchPopupVisible(true)
        : () => props.setIsLoginPopupVisible(true)
  }
  >
    <SearchButton onClick={props.onClick} />
    <RocketGroup />
  </Wrapper>
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchButtonGroup);
