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
    {props.colleagues.map(colleague => (
      <PersonCard key={colleague.shareableId} userData={colleague} />
    ))}
  </styled.Wrapper>
);

export default connect(mapStateToProps)(memo(ColleaguesView));
