import { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { showToast } from 'commons/utils/misc';
import { AppState, loadAboutTabData, loadNthReviewGot } from 'store';

import CustomButton from 'components/shared/CustomButton';
import Pagination from 'components/shared/Pagination';
import ReviewCard from 'components/shared/ReviewCard';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  privateToken: store.profile.privateToken,
  shareableId: store.profile.shareableId,
  isLoading: store.interaction.isProfileAboutTabLoading,
  receivedReviewsAmount: store.reviews.receivedReviewsAmount,
  currentReviewData: store.reviews.currentReceivedReview
});

const mapDispatchToProps: types.IDispatchProps = {
  loadTabData: loadAboutTabData,
  loadNthReview: loadNthReviewGot
};

function copyAwaiterLink(awaiterId: string) {
  showToast('Ссылка скопрована');
  navigator.clipboard.writeText(`${window.location.origin}?awaiter=${awaiterId}`);
}

const NoContent = <styled.Title isHighlighted>Загрузка...</styled.Title>;

/**
 * Section with user's reviews.
 */
function AboutArea(props: types.IProps) {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    props.loadTabData(props.privateToken as string);
  }, []);

  const ContentEmpty = (
    <>
      <styled.Title isHighlighted>
        <styled.InnerSpan>Никто ещё не оставил о вас отзыв :(</styled.InnerSpan>
      </styled.Title>

      <styled.Title>
        <styled.InnerSpan>Вы можете запросить отзыв о себе.</styled.InnerSpan>
        <styled.InnerSpan>Отправьте ссылку тому, кто может оставить о вас отзыв</styled.InnerSpan>
      </styled.Title>

      <styled.ButtonWrapper>
        <CustomButton onClick={() => copyAwaiterLink(props.shareableId as string)}>
          Копировать ссылку
        </CustomButton>
      </styled.ButtonWrapper>
    </>
  );

  const ContentAvailable = (
    <>
      <styled.TitleWrapper>
        <styled.Title isHighlighted>Отзывы обо мне:</styled.Title>
      </styled.TitleWrapper>

      {/* @ts-ignore: Used only in case the data is not null. */}
      <ReviewCard reviewCardData={props.currentReviewData} />
    </>
  );

  return (
    <styled.Wrapper>
      <styled.ReviewSectionWrapper>
        {props.isLoading ? NoContent : props.currentReviewData ? ContentAvailable : ContentEmpty}
      </styled.ReviewSectionWrapper>

      {props.receivedReviewsAmount > 0 && (
        <Pagination
          nPages={props.receivedReviewsAmount}
          onNextClick={() => {
            props.loadNthReview(props.privateToken as string, currentPage + 1);
            setCurrentPage(currentPage + 1);
          }}
          onPageClick={(page: number) => {
            props.loadNthReview(props.privateToken as string, page - 1);
            setCurrentPage(page - 1);
          }}
          onPrevClick={() => {
            props.loadNthReview(props.privateToken as string, currentPage - 1);
            setCurrentPage(currentPage - 1);
          }}
        />
      )}

      {/* Toast notification wrapper. */}
      <ToastContainer />
    </styled.Wrapper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(AboutArea));
