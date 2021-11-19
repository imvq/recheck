import { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { jumpTo } from 'commons/utils/misc';
import { apiClient } from 'commons/utils/services';
import { AppState, setColleagues, setPageLocked, setPageUnlocked } from 'store';
import { loadReviewsTabData, loadNthLeftReview } from 'store/thunks';

import CustomButton from 'components/shared/CustomButton';
import Pagination from 'components/shared/Pagination';
import ReviewCard from 'components/shared/ReviewCard';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  privateToken: store.profile.privateToken,
  isAuthorized: store.profile.isAuthorized,
  isLoading: store.interaction.isProfileReviewsTabLoading,
  leftReviewsAmount: store.reviews.leftReviewsAmount,
  currentReviewData: store.reviews.currentObservedLeftReview
});

const mapDispatchToProps: types.IDispatchProps = {
  loadTabData: loadReviewsTabData,
  loadNthReview: loadNthLeftReview,
  setColleagues,
  lockPage: setPageLocked,
  unlockPage: setPageUnlocked
};

/**
 * Section with user's reviews.
 */
function ReviewsArea(props: types.IProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (props.isAuthorized) {
      props.loadTabData(props.privateToken as string);
    }
  }, [props.isAuthorized]);

  const Results = (
    <styled.TitleWrapper>
      {props.isLoading
        ? <styled.Title isHighlighted>Загрузка...</styled.Title>
        : props.currentReviewData
          ? <ReviewCard showTarget reviewCardData={props.currentReviewData} />
          : <styled.Title isHighlighted>Оставьте свой первый отзыв!</styled.Title>}
    </styled.TitleWrapper>
  );

  function onWriteReviewClickHandler() {
    props.lockPage();

    apiClient.getColleagues(props.privateToken as string)
      .then(colleaguesData => {
        props.setColleagues(colleaguesData.data);
        jumpTo('/search', '?no-colleagues-update=true');
      })
      .finally(() => props.unlockPage());
  }

  const NoResults = (
    <>
      <CustomButton isDisabled={false} onClick={onWriteReviewClickHandler}>
        Написать отзыв
      </CustomButton>

      <styled.TitleWrapper isReduced>
        <styled.Title isReduced>
          *За каждый оставленный вами отзыв вы получаете +1 поиск отзыва бесплатно
        </styled.Title>
      </styled.TitleWrapper>
    </>
  );

  return (
    <styled.Wrapper>
      {Results}

      {!props.currentReviewData && NoResults}

      {props.leftReviewsAmount > 0 && (
        <Pagination
          nPages={props.leftReviewsAmount}
          onNextClick={() => {
            props.loadNthReview(props.privateToken as string, currentIndex + 1);
            setCurrentIndex(currentIndex + 1);
          }}
          onPageClick={(page: number) => {
            props.loadNthReview(props.privateToken as string, page - 1);
            setCurrentIndex(page - 1);
          }}
          onPrevClick={() => {
            props.loadNthReview(props.privateToken as string, currentIndex - 1);
            setCurrentIndex(currentIndex - 1);
          }}
        />
      )}
    </styled.Wrapper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(ReviewsArea));
