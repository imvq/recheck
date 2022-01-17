import { useEffect, useState } from 'react';
import { BsArrowDownSquare } from 'react-icons/bs';
import { connect } from 'react-redux';

import * as store from 'store';

import ContentSubareaDelimiter from 'components/shared/ContentSubareaDelimiter';
import Loader from 'components/shared/Loader';
import ObservedProfileBadge from 'components/shared/ObservedProfileBadge';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (state: store.AppState): types.IStateProps => ({
  privateToken: store.getCurrentPrivateToken(state),
  observedUsers: store.getObservedUsers(state)
});

const mapDispatchToProps: types.IDispatchProps = {
  loadObservedUsers: store.loadObservedUsers,
  setIsPageLocked: store.setIsPageLocked
};

function ObservedUsersArea(props: types.IProps) {
  const [isPending, setIsPending] = useState(true);
  const [last, setLast] = useState(0);

  function finalizeLoading(newLast: number) {
    setLast(newLast);
    setIsPending(false);
  }

  function loadNewChunk() {
    setIsPending(true);
    props.loadObservedUsers(props.privateToken as string, last, finalizeLoading);
  }

  useEffect(() => {
    props.loadObservedUsers(props.privateToken as string, 0, finalizeLoading, true);
  }, []);

  const Results = (
    <>
      {props.observedUsers.map(card => (
        <>
          <ObservedProfileBadge key={card.fullName} observedUserData={card} />
          <ContentSubareaDelimiter half />
        </>
      ))}

      <styled.LoadButtonWrapper>
        <styled.LoadButton onClick={loadNewChunk}>
          <span>Больше</span>
          <BsArrowDownSquare />
        </styled.LoadButton>
      </styled.LoadButtonWrapper>
    </>
  );

  const NoResults = (
    <>
      No results
    </>
  );

  return (
    <styled.ObservedUsersArea>
      {isPending ? <Loader size='5rem' /> : props.observedUsers.length ? Results : NoResults}
    </styled.ObservedUsersArea>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ObservedUsersArea);
