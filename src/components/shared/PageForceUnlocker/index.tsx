import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setPageUnlocked } from 'store';
import { IProps, IDispatchProps } from './types';

const mapDispatchToProps: IDispatchProps = {
  unlockPage: setPageUnlocked
};

/**
 * By default, all pages are locked to prevent any side effects
 * while fetching data from server.
 * Nevertheless, it is sometimes needed to force unlock page
 * as quick as possible. PageForceUnlocker is in charge of that stuff.
 */
const PageForceUnlocker = (props: IProps) => {
  useEffect(() => props.unlockPage());

  return null;
};

export default withRouter(connect(null, mapDispatchToProps)(PageForceUnlocker));
