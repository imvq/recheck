import React from 'react';
import withStyles from 'react-css-modules';

import { ReactComponent as UserIcon } from 'assets/svg/common/CabinetIcon.svg';
import { AuthBadgeGroupProps } from './types';
import styles from './styles.module.scss';

export default withStyles(() => {
  const [isBadgeVisible, setIsBadgeVisible] = React.useState(false);

  return (
    <div>
      <UserIcon
        styleName='AuthBadge__Button'
        onClick={() => setIsBadgeVisible(!isBadgeVisible)}
      />
    </div>
  );
});
