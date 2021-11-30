import { memo } from 'react';
import { connect } from 'react-redux';

import * as store from 'store';

import PageLoader from 'components/shared/PageLoader';

import * as types from './types';

const mapStateToProps = (state: store.AppState): types.IStateProps => ({
  isPageLocked: store.getIsPageLocked(state)
});

/**
 * Component for checking page lock status and preventing
 * users from doing stuff that might be inaccessible to them.
 */
const PurePageLockGuard = (props: types.IProps) => (
  <>
    {props.isPageLocked && <PageLoader isTransparent={!props.hideContentOnLock} />}
    {props.children}
  </>
);

export default connect(mapStateToProps)(memo(PurePageLockGuard));
