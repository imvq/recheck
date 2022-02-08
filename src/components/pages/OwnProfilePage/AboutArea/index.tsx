import { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as store from 'store';
import { AppState, AppDispatch } from 'store';

import { showToast } from 'commons/utils/misc';

import CustomButton from 'components/shared/CustomButton';
import Pagination from 'components/shared/Pagination';
import ProfileHead from 'components/shared/ProfileHead';
import ReviewCard from 'components/shared/ReviewCard';

import * as styled from './styled';

const NoContent = <styled.Title isHighlighted>Загрузка...</styled.Title>;

/**
 * Section with user's reviews.
 */
function AboutArea() {
  const [currentPage, setCurrentPage] = useState(0);

  const privateToken = useSelector((state: AppState) => state.profile.privateToken);
  const currentProfile = useSelector((state: AppState) => store.getCurrentProfileInfo(state));
  const isTabDataLoading = useSelector((state: AppState) => state.misc.isProfileAboutTabLoading);
  const reviewsAmount = useSelector((state: AppState) => state.reviews.receivedReviewsAmount);
  const review = useSelector((state: AppState) => state.reviews.currentObservedReceivedReview);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(store.loadAboutTabData(privateToken!));
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
        <CustomButton onClick={() => dispatch(store.setIsAskForReviewPopupVisible(true))}>
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

      <ReviewCard reviewCardData={review!} />
    </>
  );

  return (
    <styled.Wrapper>
      <ProfileHead profileInfo={currentProfile} />

      <styled.ReviewSectionWrapper>
        {isTabDataLoading ? NoContent : review ? ContentAvailable : ContentEmpty}
      </styled.ReviewSectionWrapper>

      {reviewsAmount > 0 && (
        <Pagination
          nPages={reviewsAmount}
          onNextClick={() => {
            dispatch(store.loadNthReceivedReview(privateToken!, currentPage + 1));
            setCurrentPage(currentPage + 1);
          }}
          onPageClick={(page: number) => {
            dispatch(store.loadNthReceivedReview(privateToken!, page - 1));
            setCurrentPage(page - 1);
          }}
          onPrevClick={() => {
            dispatch(store.loadNthReceivedReview(privateToken!, currentPage - 1));
            setCurrentPage(currentPage - 1);
          }}
        />
      )}
    </styled.Wrapper>
  );
}

export default memo(AboutArea);
