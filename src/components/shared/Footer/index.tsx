import { memo } from 'react';
import { BsTelegram } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { Link as ScrollLink } from 'react-scroll';

import * as store from 'store';

import { jumpTo } from 'commons/utils/misc';

import * as styled from './styled';

function Footer() {
  const privateToken = useSelector((state: store.AppState) => state.profile.privateToken);
  const role = useSelector((state: store.AppState) => state.misc.currentUserRole);

  const dispatch = useDispatch<store.AppDispatch>();

  return (
    <styled.Wrapper>
      <styled.SectionWrapper>
        <styled.InnerLogo />
      </styled.SectionWrapper>

      {privateToken && (
        <styled.SectionWrapper>
          <styled.MenuEntryTextMarked>Меню:</styled.MenuEntryTextMarked>
          <ScrollLink to='top-scroll-anchor' smooth duration={300}>
            <styled.MenuEntryTextLink
              onClick={() => {
                dispatch(store.setCurrentUserRole(role === 'candidate' ? 'recruiter' : 'candidate'));
                jumpTo('/profile');
              }}
            >
              {role === 'candidate' ? 'Вы рекрутёр?' : 'Вы кандидат?'}
            </styled.MenuEntryTextLink>
          </ScrollLink>
        </styled.SectionWrapper>
      )}

      <styled.SectionWrapper>
        <styled.MenuEntryTextMarked>Контакты:</styled.MenuEntryTextMarked>
        <styled.MenuEntryTextDisabled>info@recheck-candidate.com</styled.MenuEntryTextDisabled>
        <styled.MenuEntryTextDisabled>
          <span>Поддержка:</span>
          {/* eslint-disable-next-line */}
          <styled.SocialLink href='https://t.me/recheck_team'><BsTelegram /></styled.SocialLink>
        </styled.MenuEntryTextDisabled>
      </styled.SectionWrapper>
    </styled.Wrapper>
  );
}

export default memo(Footer);
