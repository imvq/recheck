import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Api from 'utils/api';
import controlledHistory from 'utils/routing';
import { AppState, setIsLoginPopupVisible } from 'store';
import { IProps, IStateProps, IDispatchProps } from './types';
import { Wrapper, AdaptedHeader, AdaptedFooter, ContentWrapper } from './styled';

const mapStateToProps = (store: AppState): IStateProps => ({
  isAuthorized: store.auth.isAuthorized,
  currentProfileInfo: store.profile.currentProfileInfo
});

const mapDispatchToProps: IDispatchProps = {
  setIsLoginPopupVisible
};

const ConfirmationPage = (props: IProps) => {
  const { uuid: pageUuid } = useParams<{ uuid: string }>();

  useEffect(() => {
    // true       | false          | null
    // authorized | not authorized | check is pending
    if (props.isAuthorized === null) {
      return;
    }

    if (props.isAuthorized) {
      Api.bindReviewTarget({
        profileId: props.currentProfileInfo.currentId,
        reviewId: pageUuid
      })
        .then(() => controlledHistory.replace('/profile'))
        .catch(() => controlledHistory.replace('/404'));
      return;
    }

    if (!props.isAuthorized) {
      props.setIsLoginPopupVisible(true);
      controlledHistory.replace('/');
    }
  }, [props.isAuthorized]);

  return (
    <Wrapper>
      <AdaptedHeader />
      <ContentWrapper>
        Login, please
      </ContentWrapper>
      <AdaptedFooter />
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationPage);
