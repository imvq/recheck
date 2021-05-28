import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { AppState, loadAboutTabData, loadNthReviewGot } from 'store';
import Pagination from 'components/shared/Pagination';
import ReviewCard from './ReviewCard';
import { IProps, IStateProps, IDispatchProps } from './types';
import { Wrapper, TitleWrapper, Title } from './styled';

const mapStateToProps = (store: AppState): IStateProps => ({
  currentPorfileId: store.profile.currentProfileInfo.currentId,
  isLoading: store.interaction.isProfileAboutTabLoading,
  reviewsGotChunksAmount: store.interaction.reviewsGotChunksAmount,
  currentReviewCardData: store.interaction.currentReviewGot
});

const mapDispatchToProps: IDispatchProps = {
  loadTabData: loadAboutTabData,
  loadNthReview: loadNthReviewGot
};

/**
 * Section with user's reviews.
 */
const AboutArea = (props: IProps) => {
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
            : <Title isHighlighted>Никто ещё не оставил о вас отзыв :(</Title>}
      </TitleWrapper>
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
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutArea);
