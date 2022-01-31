import { memo, useEffect, useState } from 'react';
import { BsArrowDownSquare } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';

import * as store from 'store';

import ContentSubareaDelimiter from 'components/shared/ContentSubareaDelimiter';
import Loader from 'components/shared/Loader';
import ObservedProfileBadge from 'components/shared/ObservedProfileBadge';

import { getDemoObservedUser, showInsignificantToast } from 'commons/utils/misc';

import * as styled from './styled';

function ObservedUsersArea() {
  const [isPending, setIsPending] = useState(true);
  const [isLoadButonHidden, setIsLoadButtonHidden] = useState(false);
  const [last, setLast] = useState(0);

  const privateToken = useSelector((state: store.AppState) => state.profile.privateToken);
  const observedUsers = useSelector((state: store.AppState) => state.observing.observedUsers);

  const dispatch = useDispatch<store.AppDispatch>();

  function finalizeLoading(newLast: number) {
    if (last === newLast) {
      setIsLoadButtonHidden(true);
      showInsignificantToast('Достигнут конец списка');
    }

    setLast(newLast);
    setIsPending(false);
  }

  function finalizeLoadingFirstTry(newLast: number) {
    if (last === newLast) {
      setIsLoadButtonHidden(true);
      showInsignificantToast('В данный момент у Вас еще нет кандидатов');
    }

    setLast(newLast);
    setIsPending(false);
  }

  function loadNewChunk() {
    setIsPending(true);
    dispatch(store.loadObservedUsers(privateToken!, last, finalizeLoading));
  }

  useEffect(() => {
    if (privateToken) {
      dispatch(store.loadObservedUsers(privateToken, 0, finalizeLoadingFirstTry, true));
    }
  }, [privateToken]);

  const Results = (
    <>
      {observedUsers.map(card => (
        <>
          <ObservedProfileBadge key={card.fullName} observedUserData={card} />
          <ContentSubareaDelimiter half />
        </>
      ))}

      {isLoadButonHidden && (
      <styled.LoadButtonWrapper>
        <styled.LoadButton onClick={loadNewChunk}>
          <span>Больше</span>
          <BsArrowDownSquare />
        </styled.LoadButton>
      </styled.LoadButtonWrapper>
      )}
    </>
  );

  const NoResults = <ObservedProfileBadge isDemoUser observedUserData={getDemoObservedUser()} />;

  return (
    <styled.ObservedUsersArea>
      {isPending ? <Loader size='5rem' /> : observedUsers.length ? Results : NoResults}
    </styled.ObservedUsersArea>
  );
}

export default memo(ObservedUsersArea);
