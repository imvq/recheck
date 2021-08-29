import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import ApiClient from 'commons/externals/ApiClient';
import controlledHistory from 'commons/utils/routing';
import {
  AppState,
  loadObservedReviewsData,
  setIsObservedPageLoading,
  setPageUnlocked
} from 'store';

import { ISearchProfileInfo } from 'commons/types/general';
import { mapProfileInfoToIAppProfileInfoSlice as sliceProfileData } from 'commons/utils/misc';

import Footer from 'components/shared/Footer';
import ProfileHead from 'components/shared/ProfileHead';
import Pagination from 'components/shared/Pagination';
import ReviewCard from 'components/shared/ReviewCard';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentProfileInfo: store.profile.currentProfileInfo,
  isAuthorized: store.auth.isAuthorized,
  isLoading: store.interaction.isObservedReviewsPageLoading,
  isObservedReviewsPageLoading: store.interaction.isObservedReviewsPageLoading,
  observedReviewsChunksAmount: store.interaction.observedReviewsChunksAmount
});

const mapDispatchToProps: types.IDispatchProps = {
  loadObservedReviewsData,
  setIsLoading: () => setIsObservedPageLoading(true),
  unlockPage: setPageUnlocked
};

type FindTargetCallbacks = {
  setObservedUserCallback: (user: ISearchProfileInfo) => void;
  unlockPageCallback: () => void;
}

export async function callApiToCheckTargetConnection(
  askerProfileId: string,
  targetShareableId: string,
  callbacks: FindTargetCallbacks
) {
  try {
    const searchResult = await ApiClient.searchUserByShareableId(targetShareableId);
    callbacks.setObservedUserCallback(searchResult.data.result);
  } catch {
    controlledHistory.push('/404');
  } finally {
    callbacks.unlockPageCallback();
  }
}

/**
 * Someone else's profile page (not the own page of the current user).
 */
function ObservedProfilePage(props: types.IProps) {
  const { targetShareableId } = useParams<{ targetShareableId: string }>();

  const [observedUser, setObservedUser] = useState<ISearchProfileInfo>();

  useEffect(() => {
    props.setIsLoading();

    callApiToCheckTargetConnection(props.currentProfileInfo.currentId, targetShareableId, {
      setObservedUserCallback: setObservedUser,
      unlockPageCallback: props.unlockPage
    });
  }, []);

  useEffect(() => {
    if (props.isAuthorized) {
      props.loadObservedReviewsData(props.currentProfileInfo.currentId, targetShareableId);
    }
  }, [props.currentProfileInfo.currentId, props.isAuthorized]);

  const ContentEmpty = () => (
    <>
      <styled.Title isHighlighted>
        <styled.InnerSpan>Никто ещё не оставил отзыв о пользователе</styled.InnerSpan>
      </styled.Title>
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
            {props.isLoading ? <styled.Title isHighlighted>Загрузка...</styled.Title>
              : (
                <ReviewCard
                  reviewCardData={{
                    recommendation: 'Lorem Ipsum',
                    recommendationMark: 6,
                    strengths: 'Lorem Ipsum',
                    targetCompanyName: 'Ascendix Technology',
                    targetName: 'Demo User',
                    targetPhotoUrl: 'https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg',
                    targetPosition: 'QA',
                    tasks: 'Lorem Ipsum'
                  }}
                  showTarget
                />
              )}
          </styled.ReviewSectionWrapper>

          {props.observedReviewsChunksAmount ? (
            <Pagination
              nPages={props.observedReviewsChunksAmount}
              onNextClick={() => {
                // props.loadNthReview(props.currentPorfileId, currentIndex + 1);
                // setCurrentIndex(currentIndex + 1);
              }}
              onPageClick={(page: number) => {
                // props.loadNthReview(props.currentPorfileId, page - 1);
                // setCurrentIndex(page - 1);
              }}
              onPrevClick={() => {
                // props.loadNthReview(props.currentPorfileId, currentIndex - 1);
                // setCurrentIndex(currentIndex - 1);
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
