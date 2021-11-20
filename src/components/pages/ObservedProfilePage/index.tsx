import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { jumpTo } from 'commons/utils/misc';
import { apiClient } from 'commons/utils/services';
import { AppState, setIsObservedPageLoading, setPageUnlocked } from 'store';

import { ISearchedProfile } from 'commons/types';

import Footer from 'components/shared/Footer';
import ProfileHead from 'components/shared/ProfileHead';
import Pagination from 'components/shared/Pagination';
import ReviewCard from 'components/shared/ReviewCard';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  privateToken: store.profile.privateToken,
  isAuthorized: store.profile.isAuthorized,
  isLoading: store.interaction.isObservedReviewsPageLoading,
  isObservedReviewsPageLoading: store.interaction.isObservedReviewsPageLoading,
  observedReviewsChunksAmount: 0,
  currentReviewCardData: null
});

const mapDispatchToProps: types.IDispatchProps = {
  loadObservedReviewsData: () => {},
  loadNthReview: () => {},
  setIsLoading: () => setIsObservedPageLoading(true),
  unlockPage: setPageUnlocked
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

  const [observedUser, setObservedUser] = useState<ISearchedProfile>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (props.privateToken) {
      props.setIsLoading();

      apiClient.checkIfUserCanBeViewed(props.privateToken as string, targetShareableId)
        .then(checkData => {
          if (!checkData.data.success) {
            jumpTo('/404');
            return;
          }

          apiClient.searchUserByShareableId(targetShareableId)
            .then(searchResult => {
              setObservedUser(searchResult.data);

            // TODO: load reviews.
            // props.loadObservedReviewsData(props.currentProfileId, targetShareableId);
            });
        })
        .catch(() => jumpTo('/404'));
    }
  }, [props.privateToken]);

  const ContentAvailable = (
    <>
      <styled.TitleWrapper>
        <styled.Title>Отзывы о кандидате:</styled.Title>
      </styled.TitleWrapper>

      {/* @ts-ignore: Used only in case the data is not null. */}
      <ReviewCard reviewCardData={props.currentReviewCardData} />
    </>
  );

  return (
    <styled.Wrapper>
      <styled.Sidebar />

      <styled.AdaptedHeader />

      {observedUser && (
        <styled.ContentWrapper>
          <styled.TitleWrapper id='ProfileTitle'>
            <styled.Title>Просмотр профиля</styled.Title>
          </styled.TitleWrapper>

          <ProfileHead profileInfo={observedUser} />

          <styled.ReviewSectionWrapper>
            {props.isLoading ? NoContent
              : props.currentReviewCardData ? ContentAvailable : ContentEmpty}
          </styled.ReviewSectionWrapper>

          {props.observedReviewsChunksAmount ? (
            <Pagination
              nPages={props.observedReviewsChunksAmount}
              onNextClick={() => {
                props.loadNthReview(
                  props.privateToken as string,
                  targetShareableId,
                  currentIndex + 1
                );
                setCurrentIndex(currentIndex + 1);
              }}
              onPageClick={(page: number) => {
                props.loadNthReview(
                  props.privateToken as string,
                  targetShareableId,
                  page - 1
                );
                setCurrentIndex(page - 1);
              }}
              onPrevClick={() => {
                props.loadNthReview(
                  props.privateToken as string,
                  targetShareableId,
                  currentIndex - 1
                );
                setCurrentIndex(currentIndex - 1);
              }}
            />
          ) : null}
        </styled.ContentWrapper>
      )}

      <Footer />
    </styled.Wrapper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ObservedProfilePage);
