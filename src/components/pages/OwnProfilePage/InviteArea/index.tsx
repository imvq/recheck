import { memo } from 'react';

import InviteForm from './InviteForm';

import * as styled from './styled';

function InviteArea() {
  return (
    <styled.InviteArea>
      <InviteForm
        reviewFormData={{
          name: 'Форма опроса о кандидате'
          // TBD.
        }}
      />
    </styled.InviteArea>
  );
}

export default memo(InviteArea);
