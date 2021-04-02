import { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import queryString from 'query-string';
import axios from 'axios';

import * as cookies from 'utils/cookies';
import * as constants from 'utils/constants';
import { cookieManager } from 'utils/functions';
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
    expires: new Date(Date.now() + constants.MONTH_MS * 2)
  };

  const redirectOnError = () => {
    props.setIsAuthorized(false);
    window.location.replace(
      `${process.env.REACT_APP_START_PAGE}/${rollbackTo}`
    );
  };

  axios.post(`${process.env.REACT_APP_API}/auth/confirm`, postData)
    .then((confirmationResponse) => {
      cookieManager.set(
        cookies.BEARER,
        confirmationResponse.data[cookies.BEARER],
        cookieData
      );
      axios.get(`${process.env.REACT_APP_API}/user/profile`)
        .then((profileResponse) => {
          const profileId = profileResponse.data['profileId'] as string;
          const registrationCheckData = { profileId };
          axios.post(
            `${process.env.REACT_APP_API}/user/check/registered`,
            registrationCheckData
          )
            .then(() => {
              // TODO: Redirect to profile LinkedIn link scraper.
            })
            .catch(redirectOnError);
        })
        .catch(redirectOnError);
      props.setIsAuthorized(true);
      window.location.replace(`${process.env.REACT_APP_START_PAGE}/${rollbackTo}`);
    })
    .catch(redirectOnError);

  return <></>;
};

export default connect(null, mapDispatchToProps)(OAuthExchanger);
