import { Errors } from 'typescript-rest';
import axios from 'axios';

import * as constants from '@common/constants';
import * as cookiesList from '@common/cookies';
import * as generalTypes from '@typing/general';
import * as apiResponses from '@typing/apiResponses';
import dto from '@dto';
import utils from '@utils';
import Logger from '@common/Logger';

/**
 * Service in charge of LinkedIn OAuth.
 */
export default class LinkedInOAuthService {
  public async exchangeLinkedInAuthCode(exchangeDto: dto.ExchangeLinkedInAuthCodeDto)
    : Promise<apiResponses.IExchangeLinkedInAuthCodeResponseDto> {
    try {
      const params = new URLSearchParams();
      params.append('grant_type', 'authorization_code');
      params.append('code', exchangeDto.code);
      params.append('redirect_uri', exchangeDto.redirectPath);
      params.append('client_id', process.env.LINKEDIN_APP_CLIENT_ID as string);
      params.append('client_secret', process.env.LINKEDIN_APP_CLIENT_SECRET as string);

      const { data } = await axios.post(constants.AUTH_URL, params, utils.createUrlEncodedConfig());

      return { [cookiesList.LI_AT]: data['access_token'] };
    } catch (error) {
      Logger.ifdev()?.log(JSON.stringify(error));
      throw error instanceof Errors.UnauthorizedError ? error
        : new Errors.InternalServerError('Unexpected error.');
    }
  }

  public async retrieveProfileInfo(cookies: generalTypes.IStringIndexable)
    : Promise<apiResponses.IRetrieveLinkedInProfileInfoResponseDto> {
    try {
      if (!cookies[cookiesList.LI_AT]) {
        throw new Errors.UnauthorizedError('No Bearer token provided');
      }

      const config = utils.createAuthConfig(cookies[cookiesList.LI_AT]);
      const { data: profile } = await axios.get(
        constants.LI_PROFILE_URL, config
      );
      const { data: photo } = await axios.get(
        constants.PHOTO_URL, config
      );
      const highestQualityPicture = photo.profilePicture['displayImage~'].elements[
        photo.profilePicture['displayImage~'].elements.length - 1
      ];

      return {
        profileId: profile.id,
        name: `${profile.localizedFirstName} ${profile.localizedLastName}`,
        photoUrl: `${highestQualityPicture.identifiers[0].identifier}`
      };
    } catch (error) {
      Logger.ifdev()?.err(error);
      throw error instanceof Errors.UnauthorizedError ? error
        : new Errors.InternalServerError('Request limits breach.');
    }
  }
}
