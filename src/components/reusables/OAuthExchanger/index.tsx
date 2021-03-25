import { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import queryString from 'query-string';
import axios from 'axios';

import { cookieManager } from 'tools.common';
import { setPageLocked, setPageUnlocked, setIsAuthorized } from 'store';
import { OAuthExchangerDispatchProps } from './types';

const mapDispatchToProps: OAuthExchangerDispatchProps = {
  lockPage: setPageLocked,
  unlockPage: setPageUnlocked,
  setIsAuthorized
};

/**
 * Wrapper in charge of exchanging authorization code for an access token.
 */
const OAuthExchanger: FunctionComponent<OAuthExchangerDispatchProps> = (props) => {
  const location = useLocation();
  const queries = queryString.parse(location.search) as { code: string };
  const { rollbackTo } = useParams<{ rollbackTo: string; }>();

  useEffect(() => props.lockPage(), []);

  const postData = {
    code: queries.code,
    redirectPath: `${process.env.REACT_APP_AUTH_RETURN_HOSTNAME}/${rollbackTo}`
  };

  const cookieData = {
    path: '/',
    expires: new Date(Date.now() + 5259492)
  };

  axios.post(`${process.env.REACT_APP_API}/auth/confirm`, postData)
    .then((response) => {
      cookieManager.set('access_token', response.data['accessToken'], cookieData);
      props.setIsAuthorized(true);
    }).catch(() => {
      props.setIsAuthorized(false);
    }).finally(() => {
      window.location.replace(`${process.env.REACT_APP_START_PAGE}/${rollbackTo}`);
    });

  return <></>;
};

export default connect(null, mapDispatchToProps)(OAuthExchanger);
