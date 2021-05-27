import { useEffect } from 'react';
import { connect } from 'react-redux';

import { AppState, loadAboutTabData } from 'store';
import ReviewCard from './ReviewCard';
import { IProps, IStateProps, IDispatchProps } from './types';
import { Wrapper, TitleWrapper, Title } from './styled';

const mapStateToProps = (store: AppState): IStateProps => ({
  currentPorfileId: store.profile.currentProfileInfo.currentId,
  isLoading: store.interaction.isProfileAboutTabLoading,
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
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutArea);
