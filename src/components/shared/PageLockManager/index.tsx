import { connect } from 'react-redux';

import PageLoader from 'components/shared/PageLockManager/PageLoader';
import { AppState } from 'store';

import * as types from './types';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  isPageLocked: store.interaction.isPageLocked
});

/**
 * Component for checking page lock status and preventing
 * users from doing stuff that might be inaccessible to them.
 */
const PageLockManager = (props: types.IProps) => (
  <>
    {props.isPageLocked && <PageLoader isTransparent={!props.hideContentOnLock} />}
    {props.children}
  </>
);

export default connect(mapStateToProps)(PageLockManager);
