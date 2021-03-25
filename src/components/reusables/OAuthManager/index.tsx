import { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import axios from 'axios';

import { cookieManager } from 'tools.common';
import { setPageLocked, setPageUnlocked, setIsAuthorized } from 'store';
import { OAuthManagerDispatchProps } from './types';

const mapDispatchToProps: OAuthManagerDispatchProps = {
  lockPage: setPageLocked,
  unlockPage: setPageUnlocked,
  setIsAuthorized
};

/**
 * Wrapper in charge of exchanging authorization code for an access token.
 */
const OAuthManager:FunctionComponent<OAuthManagerDispatchProps> = (props) => {
  const location = useLocation();
  const queries = queryString.parse(location.search) as { code: string };

  useEffect(() => props.lockPage(), []);

  axios.post(
    `${process.env.REACT_APP_API}/auth/confirm`,
    { code: queries.code }
  ).then((response) => {
    cookieManager.set(
      'access_token', response.data['accessToken'],
      {
        path: '/',
        expires: new Date(Date.now() + 5259492)
      }
    );
    props.setIsAuthorized(true);
  }).catch(() => {
    props.setIsAuthorized(false);
  }).finally(() => {
    props.unlockPage();
  });

  return <></>;
};

export default connect(null, mapDispatchToProps)(OAuthManager);
