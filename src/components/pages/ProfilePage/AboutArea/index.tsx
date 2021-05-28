import { useEffect } from 'react';
import { connect } from 'react-redux';

import { AppState, loadAboutTabData } from 'store';
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
  loadTabData: loadAboutTabData
};

/**
 * Section with user's reviews.
 */
const AboutArea = (props: IProps) => {
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
        onNextClick={() => {}}
        onPageClick={() => {}}
        onPrevClick={() => {}}
      />
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutArea);
