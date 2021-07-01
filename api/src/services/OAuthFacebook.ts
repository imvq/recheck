import { Errors } from 'typescript-rest';
import axios from 'axios';

import * as constants from '@common/constants';
import * as cookiesList from '@common/cookies';
import * as generalTypes from '@typing/general';
import * as apiResponses from '@typing/apiResponses';

import logger from '@logging/Logger';
import { getSavedUserEmail } from './common';

/**
 * Service in charge of Facebook OAuth.
 */
export default class FacebookOAuthService {
  public async retrieveProfileInfo(
    cookies: generalTypes.IStringIndexable,
    options?: { withEmail: boolean }
  )
    : Promise<apiResponses.IRetrieveFacebookProfileInfoResponseDto> {
    try {
      if (!cookies[cookiesList.FA_AT]) {
        throw new Errors.UnauthorizedError('No Bearer token provided');
      }

      const { data: profile } = await axios.get(
        constants.FA_PROFILE_URL,
        {
          params: {
            fields: 'id,email,name,picture',
            access_token: cookies[cookiesList.FA_AT]
          }
        }
      );

      let savedUserEmail;
      if (options?.withEmail) {
        savedUserEmail = await getSavedUserEmail(profile.id);
      }

      return {
        profileId: profile.id,
        name: profile.name,
        email: savedUserEmail,
        photoUrl: profile.picture.data.url
      };
    } catch (error) {
      logger.err(error);
      throw new Errors.UnauthorizedError('Invalid token.');
    }
  }
}
