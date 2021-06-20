import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { AppState, loadReviewsTabData, loadNthReviewLeft } from 'store';
import CustomButton from 'components/shared/CustomButton';
import Pagination from 'components/shared/Pagination';
import ReviewCard from 'components/shared/ReviewCard';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentPorfileId: store.profile.currentProfileInfo.currentId,
  isLoading: store.interaction.isProfileReviewsTabLoading,
  reviewsLeftChunksAmount: store.interaction.reviewsLeftChunksAmount,
  currentReviewCardData: store.interaction.currentReviewLeft
});

const mapDispatchToProps: types.IDispatchProps = {
  loadTabData: loadReviewsTabData,
  loadNthReview: loadNthReviewLeft
};

/**
 * Section with user's reviews.
 */
const ReviewsArea = (props: types.IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    props.loadTabData(props.currentPorfileId);
  }, []);

  return (
    <styled.Wrapper>
      <styled.TitleWrapper>
        {props.isLoading
          ? <styled.Title isHighlighted>Загрузка...</styled.Title>
          : props.currentReviewCardData
            ? <ReviewCard showTarget reviewCardData={props.currentReviewCardData} />
            : <styled.Title isHighlighted>Оставьте свой первый отзыв!</styled.Title>}
      </styled.TitleWrapper>

      {!props.currentReviewCardData
        ? (
          <>
            <CustomButton isDisabled={false}>Написать отзыв</CustomButton>
            <styled.TitleWrapper isReduced>
              <styled.Title isReduced>
                *За каждый оставленный вами отзыв вы получаете +1 поиск отзыва бесплатно
              </styled.Title>
            </styled.TitleWrapper>
          </>
        )
        : null}

      {props.reviewsLeftChunksAmount ? (
        <Pagination
          nPages={props.reviewsLeftChunksAmount}
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
    </styled.Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsArea);
