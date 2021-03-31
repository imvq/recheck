import { useState, useEffect, useCallback } from 'react';

import * as constants from 'utils/constants';
import { cookieManager } from 'utils/functions';
import CookieImage from 'assets/images/reusables/CookiePopup/Cookie.png';
import {
  Wrapper, SubsectionWrapper, AdaptedImage, TextWrapper, StyledLink, LinkButton
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
    cookieManager.set(constants.COOKIES_WARN_COOKIE_NAME, true);
    setIsVisible(false);
  }, []);

  return isVisible ? (
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
      </SubsectionWrapper>
    </Wrapper>
  ) : null;
};
