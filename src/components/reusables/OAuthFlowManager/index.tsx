import { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import queryString from 'query-string';
import axios from 'axios';
import httpStatus from 'http-status-codes';

import * as constants from 'utils/constants';
import { ProfileDto } from 'utils/types.common';
import { cookieManager, cookiesList } from 'utils/cookies';
import { mapProfileDtoToState } from 'utils/functions';
import {
  setPageLocked, setPageUnlocked, setIsAuthorized, setCurrentProfileInfo
} from 'store';
import { IProps, IDispatchProps } from './types';

const mapDispatchToProps: IDispatchProps = {
  lockPage: setPageLocked,
  unlockPage: setPageUnlocked,
  setIsAuthorized,
  setCurrentProfileInfo
};

/**
 * Wrapper in charge of exchanging authorization code for an access token.
 */
const OAuthExchanger: FunctionComponent<IProps> = (props) => {
  const location = useLocation();
  const queries = queryString.parse(location.search) as { code: string };
  const { rollbackTo } = useParams<{ rollbackTo: string; }>();

  useEffect(() => {
    props.lockPage();

    const apiBase = process.env.REACT_APP_API;
    const apiConfirmPath = `${apiBase}/auth/confirm`;
    const apiProfilePath = `${apiBase}/user/profile`;
    const apiCheckPath = `${apiBase}/user/check/registered`;

    // Last hope actions.
    const redirectOnError = () => {
      props.setIsAuthorized(false);
      window.location.replace(`${process.env.REACT_APP_START_PAGE}`);
    };

    // Post data to send with confirmation request.
    const confirmationPostData = {
      code: queries.code,
      redirectPath: `${process.env.REACT_APP_AUTH_RETURN_HOSTNAME}/${rollbackTo}`
    };

    axios.post(apiConfirmPath, confirmationPostData)
      .then((confirmationResponse) => {
        // Save OAuth bearer token to cookies.
        const tokenExpiration = new Date(Date.now() + constants.MONTH_MS * 2);
        cookieManager.set(
          cookiesList.bearer,
          confirmationResponse.data[cookiesList.bearer],
          { path: '/', expires: tokenExpiration }
        );

        axios.get(apiProfilePath, { withCredentials: true })
          .then((profileResponse) => {
            // We prefer using action creator rather than thunk creator
            // because right now we need to use profile ID we've just get.
            // So it is necessary to have full control of profile data
            // info saving process.
            const normalizedProfileInfo = mapProfileDtoToState(profileResponse.data as ProfileDto);
            props.setCurrentProfileInfo(normalizedProfileInfo);

            const profileId = normalizedProfileInfo.currentId;
            axios.post(apiCheckPath, { profileId })
              .then(() => {
                props.setIsAuthorized(true);
                window.location.replace(`${process.env.REACT_APP_START_PAGE}/${rollbackTo}`);
              })
              .catch((error) => {
                if (error.response.status === httpStatus.EXPECTATION_FAILED) {
                  // TODO: Redirect to profile LinkedIn link scraper.
                } else {
                  redirectOnError();
                }
              });
          })
          .catch(redirectOnError);
      })
      .catch(redirectOnError);
  }, []);

  return <></>;
};

export default connect(null, mapDispatchToProps)(OAuthExchanger);
