import { memo } from 'react';
import { BsWifiOff } from 'react-icons/bs';

import * as styled from './styled';

function ConnectionErrorPopup() {
  return (
    <styled.ConnectionErrorPopupWrapper>
      <styled.ConnectionErrorPopup>
        <BsWifiOff size={30} color='white' />
        <span>Обнаружены проблемы с соединением</span>
      </styled.ConnectionErrorPopup>
    </styled.ConnectionErrorPopupWrapper>
  );
}

export default memo(ConnectionErrorPopup);
