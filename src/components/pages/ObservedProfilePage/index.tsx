import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import Api from 'utils/api';
import controlledHistory from 'utils/routing';
import { AppState, loadObservedReviewsData, setPageUnlocked } from 'store';
import { ISearchProfileInfo } from 'utils/typing/general';
import { mapProfileInfoToIAppProfileInfoSlice as sliceProfileData } from 'utils/functions';
import Footer from 'components/shared/Footer';
import ProfileHead from 'components/shared/ProfileHead';
import Pagination from 'components/shared/Pagination';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentProfileInfo: store.profile.currentProfileInfo,
  isAuthorized: store.auth.isAuthorized,
  isObservedReviewsPageLoading: store.interaction.isObservedReviewsPageLoading,
  observedReviewsChunksAmount: store.interaction.observedReviewsChunksAmount
});

const mapDispatchToProps: types.IDispatchProps = {
  loadObservedReviewsData,
  unlockPage: setPageUnlocked
};

type FindTargetCallbacks = {
  setObservedUserCallback: (user: ISearchProfileInfo) => void;
  unlockPageCallback: () => void;
}

export async function callApiToCheckTargetConnection(
  askerProfileId: string,
  targetShareableId: string,
  callbacks: FindTargetCallbacks
) {
  try {
    const searchResult = await Api.searchUserByShareableId(targetShareableId);
    callbacks.setObservedUserCallback(searchResult.data.result);
  } catch {
    controlledHistory.push('/404');
  } finally {
    callbacks.unlockPageCallback();
  }
}

/**
 * Someone else's profile page (not the own page of the current user).
 */
function ObservedProfilePage(props: types.IProps) {
  const { targetShareableId } = useParams<{ targetShareableId: string }>();

  const [observedUser, setObservedUser] = useState<ISearchProfileInfo>();

  useEffect(() => {
    callApiToCheckTargetConnection(props.currentProfileInfo.currentId, targetShareableId, {
      setObservedUserCallback: setObservedUser,
      unlockPageCallback: props.unlockPage
    });
  }, []);

  useEffect(() => {
    if (props.isAuthorized) {
      props.loadObservedReviewsData(props.currentProfileInfo.currentId, targetShareableId);
    }
  }, [props.currentProfileInfo.currentId, props.isAuthorized]);

  return (
    <styled.Wrapper>
      <styled.Sidebar />

      <styled.AdaptedHeader />

      {observedUser && (
        <styled.ContentWrapper>
          <ProfileHead profileInfo={sliceProfileData(observedUser)} />
        </styled.ContentWrapper>
      )}

      {props.observedReviewsChunksAmount ? (
        <Pagination
          nPages={props.observedReviewsChunksAmount}
          onNextClick={() => {
            // props.loadNthReview(props.currentPorfileId, currentIndex + 1);
            // setCurrentIndex(currentIndex + 1);
          }}
          onPageClick={(page: number) => {
            // props.loadNthReview(props.currentPorfileId, page - 1);
            // setCurrentIndex(page - 1);
          }}
          onPrevClick={() => {
            // props.loadNthReview(props.currentPorfileId, currentIndex - 1);
            // setCurrentIndex(currentIndex - 1);
          }}
        />
      ) : null}

      <Footer />
    </styled.Wrapper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ObservedProfilePage);
