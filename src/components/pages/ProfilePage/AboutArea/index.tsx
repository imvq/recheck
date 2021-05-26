import { connect } from 'react-redux';

import ReviewCard from 'components/shared/ReviewCard';
import { AppState } from 'store';
import { IProps, IStateProps } from './types';
import { Wrapper, TitleWrapper, Title } from './styled';

const mapStateToProps = (store: AppState): IStateProps => ({
  isLoading: store.interaction.isProfileAboutTabLoading
});

/**
 * Section with user's reviews.
 */
const AboutArea = (props: IProps) => (
  <Wrapper>
    <TitleWrapper>
      {props.isLoading
        ? <Title isHighlighted>Загрузка...</Title>
        : <Title isHighlighted>Никто ещё не оставил о вас отзыв :(</Title>}
    </TitleWrapper>
  </Wrapper>
);

export default connect(mapStateToProps)(AboutArea);
