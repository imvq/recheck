import { memo } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { showToast } from 'commons/utils/misc';
import { AppState } from 'store';

import CustomButton from 'components/shared/CustomButton';

import * as types from './types';
import * as styled from '../styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  shareableId: store.profile.shareableId
});

function copyLink(link: string) {
  navigator.clipboard.writeText(`${window.location.origin}?referral=${link}`);
}

const Title = (
  <>
    <styled.Span>
      Похоже, этот пользователь ещё не с нами :(
    </styled.Span>
    <styled.Span>
      Отправьте ему приглашение и мы попросим отзыв у его коллег.
    </styled.Span>
  </>
);

function NoSearchResultsPlaceholder(props: types.IProps) {
  function handlerClick() {
    showToast('Ссылка скопирована');
    copyLink(props.shareableId as string);
  }

  const Button = (
    <styled.ButtonWrapper>
      <CustomButton onClick={handlerClick} fontSize='1.3rem'>
        Копировать ссылку
      </CustomButton>
    </styled.ButtonWrapper>
  );

  return props.isFirstSearch ? null
    : (
      <>
        <styled.SpanWrapper>
          {Title}
          {Button}
        </styled.SpanWrapper>

        {/* Toast notification wrapper. */}
        <ToastContainer />
      </>
    );
}

export default connect(mapStateToProps)(memo(NoSearchResultsPlaceholder));