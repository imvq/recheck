import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { ISearchProfileInfo } from 'utils/typing/general';
import Api from 'utils/api';
import { mapProfileInfoToIAppProfileInfoSlice } from 'utils/functions';
import controlledHistory from 'utils/routing';
import { setPageUnlocked } from 'store';
import Footer from 'components/shared/Footer';
import ProfileHead from 'components/shared/ProfileHead';

import * as types from './types';
import * as styled from './styled';

const mapDispatchToProps: types.IDispatchProps = {
  unlockPage: setPageUnlocked
};

/**
 * Someone else's profile page (not the own page of the current user).
 */
const ObservedProfilePage = (props: types.IProps) => {
  const { targetShareableId } = useParams<{ targetShareableId: string }>();

  const [observedUser, setObservedUser] = useState<ISearchProfileInfo>();

  useEffect(() => {
    Api.searchUserByShareableId(targetShareableId)
      .then(searchResult => setObservedUser(searchResult.data.result))
      .catch(() => controlledHistory.push('/404'))
      .finally(() => props.unlockPage());
  }, []);

  return (
    <styled.Wrapper>
      <styled.Sidebar />

      <styled.AdaptedHeader />

      {observedUser && (
        <styled.ContentWrapper>
          <ProfileHead profileInfo={mapProfileInfoToIAppProfileInfoSlice(observedUser)} />
        </styled.ContentWrapper>
      )}

      <Footer />
    </styled.Wrapper>
  );
};

export default connect(null, mapDispatchToProps)(memo(ObservedProfilePage));
