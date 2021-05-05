import { Errors } from 'typescript-rest';
import axios from 'axios';

import * as Constants from '@common/Constants';
import * as Cookies from '@common/Cookies';
import * as GeneralTypes from '@typing/general';
import * as ApiResponses from '@typing/apiResponses';
import Logger from '@common/Logger';

/**
 * Service in charge of Facebook OAuth.
 */
export default class FacebookOAuthService {
  public async retrieveProfileInfo(cookies: GeneralTypes.IStringIndexable)
    : Promise<ApiResponses.IRetrieveFacebookProfileInfoResponseDto> {
    try {
      if (!cookies[Cookies.FA_AT]) {
        throw new Errors.UnauthorizedError('No Bearer token provided');
      }

      const { data: profile } = await axios.get(
        Constants.FA_PROFILE_URL,
        {
          params: {
            fields: 'id,name,picture',
            access_token: cookies[Cookies.FA_AT]
          }
        }
      );

      return {
        profileId: profile.id,
        name: profile.name,
        photoUrl: profile.picture.data.url
      };
    } catch (error) {
      Logger.ifdev()?.err(error);
      throw new Errors.UnauthorizedError('Invalid token.');
    }
  }
}
