import { memo } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { AppState } from 'store';
import { showToast } from 'utils/functions';
import CustomButton from 'components/shared/CustomButton';

import * as types from './types';
import * as styled from '../styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentShareableId: store.profile.currentProfileInfo.currentShareableId
});

function copyLink(link: string) {
  navigator.clipboard.writeText(`${window.location.origin}?referral=${link}`);
}

const SearchNoResults = (props: types.IProps) => {
  return props.isFirstSearch ? null
    : (
      <>
        <styled.SpanWrapper>
          <styled.Span>
            Похоже, этот пользователь ещё не с нами :(
          </styled.Span>
          <styled.Span>
            Отправьте ему приглашение и мы попросим отзыв у его коллег.
          </styled.Span>
          <styled.ButtonWrapper>
            <CustomButton
              onClick={() => {
                showToast('Ссылка скопирована');
                copyLink(props.currentShareableId);
              }}
              fontSize='1.3rem'
            >
              Копировать ссылку
            </CustomButton>
          </styled.ButtonWrapper>
        </styled.SpanWrapper>

        {/* Toast notification wrapper. */}
        <ToastContainer />
      </>
    );
};

export default connect(mapStateToProps)(memo(SearchNoResults));
