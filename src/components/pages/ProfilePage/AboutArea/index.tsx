import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { AppState, loadAboutTabData, loadNthReviewGot } from 'store';
import Pagination from 'components/shared/Pagination';
import ReviewCard from './ReviewCard';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentPorfileId: store.profile.currentProfileInfo.currentId,
  isLoading: store.interaction.isProfileAboutTabLoading,
  reviewsGotChunksAmount: store.interaction.reviewsGotChunksAmount,
  currentReviewCardData: store.interaction.currentReviewGot
});

const mapDispatchToProps: types.IDispatchProps = {
  loadTabData: loadAboutTabData,
  loadNthReview: loadNthReviewGot
};

/**
 * Section with user's reviews.
 */
const AboutArea = (props: types.IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    props.loadTabData(props.currentPorfileId);
  }, []);

  const NoContent = () => (
    <styled.Title isHighlighted>Загрузка...</styled.Title>
  );

  const ContentEmpty = () => (
    <styled.Title isHighlighted>Никто ещё не оставил о вас отзыв :(</styled.Title>
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
    </styled.Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutArea);
