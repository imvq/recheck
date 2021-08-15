import { useState, useEffect, useCallback } from 'react';

import * as constants from 'commons/utils/constants';
import { cookieManager } from 'commons/utils/cookies';
import CookieImage from 'assets/images/shared/CookiePopup/Cookie.png';

import * as styled from './styled';

/**
 * Popup with warning about cookies.
 */
export default () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!cookieManager.get(constants.COOKIES_WARN_COOKIE_NAME)) {
      setIsVisible(true);
    }
  }, []);

  const hide = useCallback(() => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    cookieManager.set(constants.COOKIES_WARN_COOKIE_NAME, true, { expires });
    setIsVisible(false);
  }, []);

  return isVisible ? (
    <styled.FixedJustifier>
      <styled.Wrapper>
        <styled.SubsectionWrapper>
          <styled.AdaptedImage src={CookieImage} draggable={false} />
          <styled.TextWrapper>
            <span>
              Этот сайт использует cookies. Вы можете изменить настройки cookies в
              своём браузере.&nbsp;&nbsp;
            </span>
            <styled.StyledLink to='/about'>Узнать больше</styled.StyledLink>
          </styled.TextWrapper>
        </styled.SubsectionWrapper>
        <styled.SubsectionWrapper>
          <styled.LinkButton onClick={hide}>
            Принять и закрыть
          </styled.LinkButton>
          {/* Mobile only. */}
          <styled.CloseButtonWrapper>
            <styled.CloseButton onClick={hide} />
          </styled.CloseButtonWrapper>
        </styled.SubsectionWrapper>
      </styled.Wrapper>
    </styled.FixedJustifier>
  ) : null;
};
