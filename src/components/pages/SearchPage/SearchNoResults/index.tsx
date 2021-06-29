import { ToastContainer, toast } from 'react-toastify';

import CustomButton from 'components/shared/CustomButton';

import * as types from './types';
import * as styled from '../styled';

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

function copyLink() {
  navigator.clipboard.writeText('Test');
}

export default (props: types.IProps) => {
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
                copyLink();
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
