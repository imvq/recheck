import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { showToast } from 'commons/utils/functions';
import { AppState, loadAboutTabData, loadNthReviewGot } from 'store';

import CustomButton from 'components/shared/CustomButton';
import Pagination from 'components/shared/Pagination';
import ReviewCard from 'components/shared/ReviewCard';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentPorfileId: store.profile.currentProfileInfo.currentId,
  currentShareableId: store.profile.currentProfileInfo.currentShareableId,
  isLoading: store.interaction.isProfileAboutTabLoading,
  reviewsGotChunksAmount: store.interaction.reviewsGotChunksAmount,
  currentReviewCardData: store.interaction.currentReviewGot
});

const mapDispatchToProps: types.IDispatchProps = {
  loadTabData: loadAboutTabData,
  loadNthReview: loadNthReviewGot
};

function copyLink(awaiterId: string) {
  navigator.clipboard.writeText(`${window.location.origin}?awaiter=${awaiterId}`);
}

/**
 * Section with user's reviews.
 */
function AboutArea(props: types.IProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    props.loadTabData(props.currentPorfileId);
  }, []);

  const NoContent = () => (
    <styled.Title isHighlighted>Загрузка...</styled.Title>
  );

  const ContentEmpty = () => (
    <>
      <styled.Title isHighlighted>
        <styled.InnerSpan>Никто ещё не оставил о вас отзыв :(</styled.InnerSpan>
      </styled.Title>
      <styled.Title>
        <styled.InnerSpan>Вы можете запросить отзыв о себе.</styled.InnerSpan>
        <styled.InnerSpan>Отправьте ссылку тому, кто может оставить о вас отзыв</styled.InnerSpan>
      </styled.Title>
      <styled.ButtonWrapper>
        <CustomButton onClick={() => {
          showToast('Ссылка скопрована');
          copyLink(props.currentShareableId);
        }}
        >
          Копировать ссылку
        </CustomButton>
      </styled.ButtonWrapper>
    </>
  );

  const ContentAvailable = () => (
    <>
      <styled.TitleWrapper>
        <styled.Title isHighlighted>Отзывы обо мне:</styled.Title>
      </styled.TitleWrapper>

      {/* @ts-ignore: Used only in case the data is not null. */}
      <ReviewCard reviewCardData={props.currentReviewCardData} />
    </>
  );

  return (
    <styled.Wrapper>
      <styled.ReviewSectionWrapper>
        {props.isLoading ? <NoContent />
          : props.currentReviewCardData
            ? <ContentAvailable />
            : <ContentEmpty />}
      </styled.ReviewSectionWrapper>

      {props.reviewsGotChunksAmount ? (
        <Pagination
          nPages={props.reviewsGotChunksAmount}
          onNextClick={() => {
            props.loadNthReview(props.currentPorfileId, currentIndex + 1);
            setCurrentIndex(currentIndex + 1);
          }}
          onPageClick={(page: number) => {
            props.loadNthReview(props.currentPorfileId, page - 1);
            setCurrentIndex(page - 1);
          }}
          onPrevClick={() => {
            props.loadNthReview(props.currentPorfileId, currentIndex - 1);
            setCurrentIndex(currentIndex - 1);
          }}
        />
      ) : null}

      {/* Toast notification wrapper. */}
      <ToastContainer />
    </styled.Wrapper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutArea);
