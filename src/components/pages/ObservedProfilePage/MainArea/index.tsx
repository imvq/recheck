import { memo, useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as store from 'store';

import cssVars from 'commons/styles/cssVars';

import { ISearchedProfile } from 'commons/types';
import { getDemoObservedUser, getDemoReview, jumpTo, jumpBack } from 'commons/utils/misc';
import { apiClient } from 'commons/utils/services';

import ProfileHead from 'components/shared/ProfileHead';
import Pagination from 'components/shared/Pagination';
import ReviewCard from 'components/shared/ReviewCard';

import * as styled from './styled';

const NoContent = <styled.Title>Загрузка...</styled.Title>;

const ContentEmpty = (
  <styled.Title>
    <styled.InnerSpan>Никто ещё не оставил отзыв о пользователе</styled.InnerSpan>
  </styled.Title>
);

/**
 * Someone else's profile page (not the own page of the current user).
 */
function MainArea() {
  const { targetShareableId } = useParams<{ targetShareableId: string }>();

  const [isPending, setIsPending] = useState(true);
  const [observedUser, setObservedUser] = useState<ISearchedProfile>();
  const [page, setPage] = useState(0);

  const privateToken = useSelector((state: store.AppState) => state.profile.privateToken);
  const currentReview = useSelector((state: store.AppState) => state.reviews.currentObservedReview);
  const reviewsAmount = useSelector((state: store.AppState) => state.reviews.observedReviewsAmount);

  const dispatch = useDispatch<store.AppDispatch>();

  useEffect(() => {
    if (privateToken) {
      if (targetShareableId === 'user-demo') {
        setObservedUser(getDemoObservedUser());
        setPage(1);
        dispatch(store.setCurrentObservedReview(getDemoReview()));
        setIsPending(false);

        return;
      }

      apiClient.checkIfUserCanBeViewed(privateToken!, targetShareableId)
        .then(checkData => {
          if (!checkData.data.success) {
            return Promise.reject();
          }

          return apiClient.searchUserByShareableId(targetShareableId);
        })
        .then(searchedProfileData => {
          setObservedUser(searchedProfileData.data);
          dispatch(store.loadObservedReviewPageData(privateToken!, targetShareableId));
        })
        .catch(() => jumpTo('/404'))
        .finally(() => setIsPending(false));
    }
  }, [privateToken]);

  const ContentAvailable = (
    <>
      <styled.TitleWrapper>
        <styled.Title>Отзывы о кандидате:</styled.Title>
      </styled.TitleWrapper>

      <ReviewCard reviewCardData={currentReview!} />
    </>
  );

  const MainContent = (
    <styled.ContentWrapper>
      <styled.BackButtonWrapper onClick={jumpBack}>
        <BsArrowLeft size={30} color={cssVars.colorForegroundPickAux1} />
      </styled.BackButtonWrapper>

      <styled.TitleWrapper id='ProfileTitle'>
        <styled.Title>Просмотр профиля</styled.Title>
      </styled.TitleWrapper>

      <ProfileHead profileInfo={observedUser!} />

      <styled.ReviewSectionWrapper>
        {isPending ? NoContent : currentReview ? ContentAvailable : ContentEmpty}
      </styled.ReviewSectionWrapper>

      {reviewsAmount > 0 && (
      <Pagination
        nPages={reviewsAmount || 1}
        onNextClick={() => {
          dispatch(store.loadNthObservedReview(privateToken!, targetShareableId, page + 1));
          setPage(page + 1);
        }}
        onPageClick={(index: number) => {
          dispatch(store.loadNthObservedReview(privateToken!, targetShareableId, index - 1));
          setPage(index - 1);
        }}
        onPrevClick={() => {
          dispatch(store.loadNthObservedReview(privateToken!, targetShareableId, page - 1));
          setPage(page - 1);
        }}
      />
      )}
    </styled.ContentWrapper>
  );

  return observedUser ? MainContent : null;
}

export default memo(MainArea);
