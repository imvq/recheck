import { useParams } from 'react-router-dom';

import * as styled from './styled';

/**
 * Someone else's profile page (not the own page of the current user).
 */
export default () => {
  const { targetShareableId } = useParams<{ targetShareableId: string }>();

  return (
    <styled.Wrapper>
      <styled.Sidebar />
    </styled.Wrapper>
  );
};
