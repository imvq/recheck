import { memo } from 'react';
import { connect } from 'react-redux';

import { AppState } from 'store';
import PersonCard from 'components/shared/PersonCard';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  colleagues: store.search.colleagues
});

export const ColleaguesView = (props: types.IProps) => (
  <styled.Wrapper>
    <styled.CardsWrapper>
      {props.colleagues.map(colleague => (
        <styled.CardWrapper key={colleague.shareableId}>
          <PersonCard
            buttonText='Оставить отзыв'
            onButtonClick={() => { /* TODO: Write a review */ }}
            userData={colleague}
          />
        </styled.CardWrapper>
      ))}
    </styled.CardsWrapper>
  </styled.Wrapper>
);

export default connect(mapStateToProps)(memo(ColleaguesView));
