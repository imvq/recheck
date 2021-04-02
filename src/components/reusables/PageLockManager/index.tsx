import { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import PageLoader from 'components/reusables/PageLockManager/PageLoader';
import { AppState } from 'store';
import { IProps, IStateProps } from './types';

const mapStateToProps = (store: AppState): IStateProps => ({
  isPageLocked: store.interaction.isPageLocked
});

/**
 * Component for checking page lock status and preventing
 * users from doing stuff that might be inaccessible to them.
 */
const PageLockManager: FunctionComponent<IProps> = (props) => {
  return props.isPageLocked
    ? <PageLoader>{props.children}</PageLoader>
    : <>{props.children}</>;
};

export default connect(mapStateToProps)(PageLockManager);
