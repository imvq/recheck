import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { jumpTo, mapProfileInfoToIAppProfileInfoSlice as sliceProfileData } from 'commons/utils/misc';
import { apiClient } from 'commons/utils/services';
import { AppState, loadObservedReviewsData, loadTargetNthReviewGot, setIsObservedPageLoading, setPageUnlocked } from 'store';

import { ISearchProfileInfo } from 'commons/types/general';

import Footer from 'components/shared/Footer';
import ProfileHead from 'components/shared/ProfileHead';
import Pagination from 'components/shared/Pagination';
import ReviewCard from 'components/shared/ReviewCard';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentProfileId: store.profile.currentProfileInfo.currentId,
  isAuthorized: store.auth.isAuthorized,
  isLoading: store.interaction.isObservedReviewsPageLoading,
  isObservedReviewsPageLoading: store.interaction.isObservedReviewsPageLoading,
  observedReviewsChunksAmount: store.interaction.observedReviewsChunksAmount,
  currentReviewCardData: store.interaction.currentObservedReviewGot
});

const mapDispatchToProps: types.IDispatchProps = {
  loadObservedReviewsData,
  loadNthReview: loadTargetNthReviewGot,
  setIsLoading: () => setIsObservedPageLoading(true),
  unlockPage: setPageUnlocked
};

const NoContent = <styled.Title isHighlighted>Загрузка...</styled.Title>;

const ContentEmpty = (
  <styled.Title isHighlighted>
    <styled.InnerSpan>Никто ещё не оставил отзыв о пользователе</styled.InnerSpan>
  </styled.Title>
);

/**
 * Someone else's profile page (not the own page of the current user).
 */
function ObservedProfilePage(props: types.IProps) {
  const { targetShareableId } = useParams<{ targetShareableId: string }>();

  const [observedUser, setObservedUser] = useState<ISearchProfileInfo>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    props.setIsLoading();

    apiClient.checkIsUserCanBeViewed({
      askerProfileId: props.currentProfileId,
      targetShareableId
    })
      .then(checkData => {
        if (!checkData.data.success) {
          jumpTo('/404');
          return;
        }

        apiClient.searchUserByShareableId(targetShareableId)
          .then(searchResult => {
            setObservedUser(searchResult.data.result);

            props.loadObservedReviewsData(props.currentProfileId, targetShareableId);
          });
      })
      .catch(() => jumpTo('/404'));
  }, []);

  const ContentAvailable = (
    <>
      <styled.TitleWrapper>
        <styled.Title isHighlighted>Отзывы о кандидате:</styled.Title>
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
          <ProfileHead profileInfo={sliceProfileData(observedUser)} />

          <styled.ReviewSectionWrapper>
            {props.isLoading ? NoContent
              : props.currentReviewCardData ? ContentAvailable : ContentEmpty}
          </styled.ReviewSectionWrapper>

          {props.observedReviewsChunksAmount ? (
            <Pagination
              nPages={props.observedReviewsChunksAmount}
              onNextClick={() => {
                props.loadNthReview(props.currentProfileId, targetShareableId, currentIndex + 1);
                setCurrentIndex(currentIndex + 1);
              }}
              onPageClick={(page: number) => {
                props.loadNthReview(props.currentProfileId, targetShareableId, page - 1);
                setCurrentIndex(page - 1);
              }}
              onPrevClick={() => {
                props.loadNthReview(props.currentProfileId, targetShareableId, currentIndex - 1);
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
