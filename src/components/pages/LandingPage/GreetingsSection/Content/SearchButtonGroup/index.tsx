import { connect } from 'react-redux';

import controlledHistory from 'utils/routing';
import { AppState, setPageLocked, setIsLoginPopupVisible } from 'store';
import RocketGroup from './RocketGroup';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  isAuthorized: store.auth.isAuthorized
});

const mapDispatchToProps: types.IDispatchProps = {
  lockPage: setPageLocked,
  setIsLoginPopupVisible
};

/**
 * Group of Programmed SVG components representing a search button
 * and a decorated SVG rocket attached to.
 */
const SearchButtonGroup = (props: types.IProps) => (
  <styled.Wrapper onClick={
    props.isAuthorized === null
      ? props.lockPage
      : props.isAuthorized
        ? () => controlledHistory.push('/search')
        : () => props.setIsLoginPopupVisible(true)
  }
  >
    <styled.SearchButton onClick={props.onClick} />
    <RocketGroup />
  </styled.Wrapper>
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchButtonGroup);
