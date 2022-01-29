import { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getDemoObservedUser, getDemoReview, jumpTo, jumpBack } from 'commons/utils/misc';
import { apiClient } from 'commons/utils/services';

import * as store from 'store';

import cssVars from 'commons/styles/cssVars';

import { ISearchedProfile } from 'commons/types';

import Footer from 'components/shared/Footer';
import ProfileHead from 'components/shared/ProfileHead';
import Pagination from 'components/shared/Pagination';
import ReviewCard from 'components/shared/ReviewCard';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (state: store.AppState): types.IStateProps => ({
  privateToken: store.getCurrentPrivateToken(state),
  observedReviewsAmount: state.reviews.observedReviewsAmount,
  currentReviewData: state.reviews.currentObservedReview
});

const mapDispatchToProps: types.IDispatchProps = {
  loadPageData: store.loadObservedReviewPageData,
  loadNthReview: store.loadNthObservedReview,
  setCurrentObservedReview: store.setCurrentObservedReview
};

const NoContent = <styled.Title>Загрузка...</styled.Title>;

const ContentEmpty = (
  <styled.Title>
    <styled.InnerSpan>Никто ещё не оставил отзыв о пользователе</styled.InnerSpan>
  </styled.Title>
);

/**
 * Someone else's profile page (not the own page of the current user).
 */
function ObservedProfilePage(props: types.IProps) {
  const { targetShareableId } = useParams<{ targetShareableId: string }>();

  const [isPending, setIsPending] = useState(true);
  const [observedUser, setObservedUser] = useState<ISearchedProfile>();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (props.privateToken) {
      if (targetShareableId === 'user-demo') {
        setObservedUser(getDemoObservedUser());
        setCurrentPage(1);
        props.setCurrentObservedReview(getDemoReview());
        setIsPending(false);

        return;
      }

      apiClient.checkIfUserCanBeViewed(props.privateToken as string, targetShareableId)
        .then(checkData => {
          if (!checkData.data.success) {
            return Promise.reject();
          }

          return apiClient.searchUserByShareableId(targetShareableId);
        })
        .then(searchedProfileData => {
          setObservedUser(searchedProfileData.data);
          props.loadPageData(props.privateToken as string, targetShareableId);
        })
        .catch(() => jumpTo('/404'))
        .finally(() => setIsPending(false));
    }
  }, [props.privateToken]);

  const ContentAvailable = (
    <>
      <styled.TitleWrapper>
        <styled.Title>Отзывы о кандидате:</styled.Title>
      </styled.TitleWrapper>

      {/* @ts-ignore: currentReview is guaranteed to be defined. */}
      <ReviewCard reviewCardData={props.currentReviewData} />
    </>
  );

  return (
    <styled.ObservedProfilePage>
      <styled.Sidebar />

      <styled.AdaptedHeader />

      {observedUser && (
        <styled.ContentWrapper>
          <styled.BackButtonWrapper onClick={jumpBack}>
            <BsArrowLeft size={30} color={cssVars.colorForegroundPickAux1} />
          </styled.BackButtonWrapper>

          <styled.TitleWrapper id='ProfileTitle'>
            <styled.Title>Просмотр профиля</styled.Title>
          </styled.TitleWrapper>

          <ProfileHead profileInfo={observedUser} />

          <styled.ReviewSectionWrapper>
            {isPending ? NoContent : props.currentReviewData ? ContentAvailable : ContentEmpty}
          </styled.ReviewSectionWrapper>

          {props.observedReviewsAmount > 0 && (
          <Pagination
            nPages={props.observedReviewsAmount || 1}
            onNextClick={() => {
              props.loadNthReview(props.privateToken as string, targetShareableId, currentPage + 1);
              setCurrentPage(currentPage + 1);
            }}
            onPageClick={(page: number) => {
              props.loadNthReview(props.privateToken as string, targetShareableId, page - 1);
              setCurrentPage(page - 1);
            }}
            onPrevClick={() => {
              props.loadNthReview(props.privateToken as string, targetShareableId, currentPage - 1);
              setCurrentPage(currentPage - 1);
            }}
          />
          )}
        </styled.ContentWrapper>
      )}

      <Footer />
    </styled.ObservedProfilePage>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ObservedProfilePage);
