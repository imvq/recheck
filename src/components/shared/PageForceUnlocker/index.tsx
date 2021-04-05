import { FC, useEffect } from 'react';
import { connect } from 'react-redux';

import { setPageUnlocked } from 'store';
import { PageForceUnlockerDispatchProps } from './types';

const mapDispatchToProps: PageForceUnlockerDispatchProps = {
  unlockPage: setPageUnlocked
};

/**
 * By default, all pages are locked to prevent any side effects
 * while fetching data from server.
 * Nevertheless, it is sometimes needed to force unlock page
 * as quick as possible. PageForceUnlocker is in charge of that stuff.
 */
const PageForceUnlocker: FC<PageForceUnlockerDispatchProps> = (props) => {
  useEffect(() => props.unlockPage(), []);

  return <></>;
};

export default connect(null, mapDispatchToProps)(PageForceUnlocker);
