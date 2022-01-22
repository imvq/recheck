import { memo } from 'react';
import { BsTelegram } from 'react-icons/bs';
import { connect } from 'react-redux';

import * as store from 'store';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (state: store.AppState): types.IStateProps => ({
  privateToken: store.getCurrentPrivateToken(state),
  currentRole: store.getCurrentUserRole(state)
});

const mapDispatchToProps: types.IDispatchProps = {
  setCurrentRole: store.setCurrentUserRole
};

function Footer(props: types.IProps) {
  return (
    <styled.Wrapper>
      <styled.SectionWrapper>
        <styled.InnerLogo />
      </styled.SectionWrapper>

      {props.privateToken
        && (
        <styled.SectionWrapper>
          <styled.MenuEntryTextMarked>Меню:</styled.MenuEntryTextMarked>
          <styled.MenuEntryTextLink
            onClick={() => {
              props.setCurrentRole(props.currentRole === 'candidate' ? 'recruiter' : 'candidate');
            }}
          >
            {props.currentRole === 'candidate' ? 'Вы рекрутёр?' : 'Вы кандидат?'}
          </styled.MenuEntryTextLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(Footer));
