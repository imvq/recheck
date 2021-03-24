import { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';

import { checkAuthorization } from 'store';
import { StartupManagerDispatchProps } from './types';

const mapDispatchToProps: StartupManagerDispatchProps = {
  checkAuthorization
};

/**
 * Wrapper checking user's authentication status.
 * Container component.
 */
const StartupManager: FunctionComponent<StartupManagerDispatchProps> = (props) => {
  useEffect(() => props.checkAuthorization(), []);
  return <></>;
};

export default connect(null, mapDispatchToProps)(StartupManager);
