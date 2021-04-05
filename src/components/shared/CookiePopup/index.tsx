import { useState, useEffect, useCallback } from 'react';

import * as constants from 'utils/constants';
import { cookieManager } from 'utils/cookies';
import CookieImage from 'assets/images/reusables/CookiePopup/Cookie.png';
import {
  FixedJustifier, Wrapper, SubsectionWrapper, AdaptedImage, TextWrapper, StyledLink, LinkButton,
  CloseButtonWrapper, CloseButton
} from './styled';

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
    <FixedJustifier>
      <Wrapper>
        <SubsectionWrapper>
          <AdaptedImage src={CookieImage} draggable={false} />
          <TextWrapper>
            <span>
              Этот сайт использует cookies. Вы можете изменить настройки cookies в
              своём браузере.&nbsp;&nbsp;
            </span>
            <StyledLink to='/about'>Узнать больше</StyledLink>
          </TextWrapper>
        </SubsectionWrapper>
        <SubsectionWrapper>
          <LinkButton onClick={hide}>
            Принять и закрыть
          </LinkButton>
          {/* Mobile only. */}
          <CloseButtonWrapper>
            <CloseButton onClick={hide} />
          </CloseButtonWrapper>
        </SubsectionWrapper>
      </Wrapper>
    </FixedJustifier>
  ) : null;
};
