import { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';

import PageLoader from 'components/reusables/PageLockManager/PageLoader';
import { AppState } from 'store';
import { SessionManagerStateProps } from './types';

const mapStateToProps = (store: AppState): SessionManagerStateProps => ({
  isPageLocked: store.interaction.isPageLocked
});

/**
 * Component for checking page lock status and preventing
 * users from doing stuff that might be inaccessible to them.
 */
const PageLockManager: FunctionComponent<SessionManagerStateProps> = (props) => {
  return props.isPageLocked
    ? <PageLoader>{props.children}</PageLoader>
    : <>{props.children}</>;
};

export default connect(mapStateToProps)(PageLockManager);
