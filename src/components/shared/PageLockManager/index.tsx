import { FunctionComponent } from 'react';
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
const PageLockManager: FunctionComponent<types.IProps> = (props) => {
  return props.isPageLocked
    ? (
      <PageLoader>
        {props.hideContentOnLock ? null : props.children}
      </PageLoader>
    )
    : <>{props.children}</>;
};

export default connect(mapStateToProps)(PageLockManager);
