import { FunctionComponent, ReactNode } from 'react';
import { connect } from 'react-redux';

import PageLoader from 'components/reusables/PageLockManager/PageLoader';
import { AppState } from 'store';
import { PageLockManagerStateProps } from './types';

const mapStateToProps = (store: AppState): PageLockManagerStateProps => ({
  isPageLocked: store.interaction.isPageLocked
});

/**
 * Component for checking page lock status and preventing
 * users from doing stuff that might be inaccessible to them.
 */
const PageLockManager: FunctionComponent<
  PageLockManagerStateProps
> = (props) => {
  return props.isPageLocked
    ? <PageLoader>{props.children}</PageLoader>
    : <>{props.children}</>;
};

export default connect(mapStateToProps)(PageLockManager);
