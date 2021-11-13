import { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { jumpTo } from 'commons/utils/misc';
import { AppState, setPageLocked, setIsLoginPopupVisible } from 'store';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  isAuthorized: store.profile.isAuthorized
});

const mapDispatchToProps: types.IDispatchProps = {
  lockPage: setPageLocked,
  setIsLoginPopupVisible
};

/**
 * Group of Programmed SVG components representing a search button
 * and a decorated SVG rocket attached to.
 */
function SearchButtonGroup(props: types.IProps) {
  const [isClickRequested, setIsClickRequested] = useState(false);

  useEffect(() => {
    if (isClickRequested) {
      const pendingFinishedCallback = getPendingFinishedCallback();
      pendingFinishedCallback();
    }
  }, [props.isAuthorized]);

  const onClickWhilePending = () => {
    props.lockPage();
    setIsClickRequested(true);
  };

  const getPendingFinishedCallback = () => {
    return props.isAuthorized
      ? () => jumpTo('/search')
      : () => props.setIsLoginPopupVisible(true);
  };

  const getMainHandler = () => (
    props.isAuthorized === null
      ? onClickWhilePending
      : getPendingFinishedCallback()
  );

  return (
    <styled.Wrapper onClick={getMainHandler()}>
      <styled.SearchButton />
      <styled.ImagesWrapper>
        <styled.Line />
        <styled.Rocket />
      </styled.ImagesWrapper>
    </styled.Wrapper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(SearchButtonGroup));
