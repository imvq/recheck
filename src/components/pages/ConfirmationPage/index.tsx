import { useEffect } from 'react';
import { connect } from 'react-redux';

import { AppState } from 'store';
import controlledHistory from 'utils/routing';
import { IProps, IStateProps } from './types';
import { Wrapper, AdaptedHeader, AdaptedFooter, ContentWrapper } from './styled';

const mapStateToProps = (store: AppState): IStateProps => ({
  isAuthorized: store.auth.isAuthorized
});

const ConfirmationPage = (props: IProps) => {
  useEffect(() => {
    if (props.isAuthorized) {
      controlledHistory.replace('/profile');
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

export default connect(mapStateToProps)(ConfirmationPage);
