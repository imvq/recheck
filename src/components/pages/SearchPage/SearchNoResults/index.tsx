import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { AppState } from 'store';
import CustomButton from 'components/shared/CustomButton';

import * as types from './types';
import * as styled from '../styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentEmail: store.profile.currentProfileInfo.currentEmail
});

function notify() {
  return toast.dark('Ссылка скопирована', {
    position: 'bottom-left',
    style: {
      backgroundColor: '#33c7ba',
      textAlign: 'center',
      fontSize: '1.3rem'
    },
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });
}

function copyLink(email: string) {
  navigator.clipboard.writeText(`${window.location.origin}?referral=${email}`);
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
                notify();
                copyLink(props.currentEmail);
              }}
              fontSize='1.3rem'
            >
              Скопировать ссылку
            </CustomButton>
          </styled.ButtonWrapper>
        </styled.SpanWrapper>

        {/* Toast notification wrapper. */}
        <ToastContainer />
      </>
    );
};

export default connect(mapStateToProps)(SearchNoResults);
