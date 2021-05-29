import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { AppState, loadReviewsTabData, loadNthReviewLeft } from 'store';
import CustomButton from 'components/shared/CustomButton';
import Pagination from 'components/shared/Pagination';
import ReviewCard from './ReviewCard';
import { IProps, IStateProps, IDispatchProps } from './types';
import { Wrapper, TitleWrapper, Title } from './styled';

const mapStateToProps = (store: AppState): IStateProps => ({
  currentPorfileId: store.profile.currentProfileInfo.currentId,
  isLoading: store.interaction.isProfileReviewsTabLoading,
  reviewsLeftChunksAmount: store.interaction.reviewsLeftChunksAmount,
  currentReviewCardData: store.interaction.currentReviewLeft
});

const mapDispatchToProps: IDispatchProps = {
  loadTabData: loadReviewsTabData,
  loadNthReview: loadNthReviewLeft
};

/**
 * Section with user's reviews.
 */
const ReviewsArea = (props: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    props.loadTabData(props.currentPorfileId);
  }, []);

  return (
    <Wrapper>
      <TitleWrapper>
        {props.isLoading
          ? <Title isHighlighted>Загрузка...</Title>
          : props.currentReviewCardData
            ? <ReviewCard reviewCardData={props.currentReviewCardData} />
            : <Title isHighlighted>Оставьте свой первый отзыв!</Title>}
      </TitleWrapper>

      {!props.currentReviewCardData
        ? (
          <>
            <CustomButton isDisabled={false}>Написать отзыв</CustomButton>
            <TitleWrapper isReduced>
              <Title isReduced>
                *За каждый оставленный вами отзыв вы получаете +1 поиск отзыва бесплатно
              </Title>
            </TitleWrapper>
          </>
        )
        : null}

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
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsArea);
