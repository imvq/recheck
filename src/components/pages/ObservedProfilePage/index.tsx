import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import Api from 'utils/api';
import controlledHistory from 'utils/routing';
import { ISearchProfileInfo } from 'utils/typing/general';
import { mapProfileInfoToIAppProfileInfoSlice as sliceProfileData } from 'utils/functions';
import { setPageUnlocked } from 'store';
import Footer from 'components/shared/Footer';
import ProfileHead from 'components/shared/ProfileHead';

import * as types from './types';
import * as styled from './styled';

const mapDispatchToProps: types.IDispatchProps = {
  unlockPage: setPageUnlocked
};

type FindTargetCallbacks = {
  setObservedUserCallback: (user: ISearchProfileInfo) => void;
  unlockPageCallback: () => void;
}

export async function callApiToFindTarget(shareableId: string, callbacks: FindTargetCallbacks) {
  try {
    const searchResult = await Api.searchUserByShareableId(shareableId);
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
    callApiToFindTarget(targetShareableId, {
      setObservedUserCallback: setObservedUser,
      unlockPageCallback: props.unlockPage
    });
  }, []);

  return (
    <styled.Wrapper>
      <styled.Sidebar />

      <styled.AdaptedHeader />

      {observedUser && (
        <styled.ContentWrapper>
          <ProfileHead profileInfo={sliceProfileData(observedUser)} />
        </styled.ContentWrapper>
      )}

      <Footer />
    </styled.Wrapper>
  );
}

export default connect(null, mapDispatchToProps)(memo(ObservedProfilePage));
