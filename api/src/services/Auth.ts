import { Errors } from 'typescript-rest';
import axios, { AxiosResponse } from 'axios';

import * as Constants from '@common/Constants';
import * as Cookies from '@common/Cookies';
import Dtos from '@dto';
import Types from '@types';
import Utils from '@utils';
import Logger from '@common/Logger';

/**
 * Service in charge of authorization stuff.
 */
export default class AuthService {
  public async exchangeAuthCode(exchangeDto: Dtos.ExchangeAuthCodeDto)
    : Promise<Types.ExchangeAuthCodeResponseDto> {
    try {
      const params = new URLSearchParams();
      params.append('grant_type', 'authorization_code');
      params.append('code', exchangeDto.code);
      params.append('redirect_uri', exchangeDto.redirectPath);
      params.append('client_id', process.env.LINKEDIN_APP_CLIENT_ID as string);
      params.append('client_secret', process.env.LINKEDIN_APP_CLIENT_SECRET as string);

      const { data } = await axios.post(Constants.AUTH_URL, params, Utils.createUrlEncodedConfig());

      return { [Cookies.BEARER]: data['access_token'] };
    } catch (error) {
      Logger.ifdev()?.log(JSON.stringify(error));
      throw error instanceof Errors.UnauthorizedError ? error
        : new Errors.InternalServerError('Unexpected error.');
    }
  }

  public async isAuthorized(cookies: Types.StringIndexable)
    : Promise<Types.CheckAuthResponseDto> {
    try {
      if (!cookies[Cookies.BEARER]) {
        throw new Errors.UnauthorizedError('No Bearer token provided');
      }

      const config = Utils.createAuthConfig(cookies[Cookies.BEARER]);
      await axios.get(Constants.PROFILE_URL, config);
      return { success: true };
    } catch (error) {
      Logger.ifdev()?.log(JSON.stringify(error));
      throw error instanceof Errors.UnauthorizedError ? error
        : new Errors.InternalServerError('LinkedIn error.');
    }
  }

  public async getProfile(cookies: Types.StringIndexable)
    : Promise<Types.GetProfileResponseDto> {
    try {
      if (!cookies[Cookies.BEARER]) {
        throw new Errors.UnauthorizedError('No Bearer token provided');
      }

      const config = Utils.createAuthConfig(cookies[Cookies.BEARER]);
      const { data: profile }: AxiosResponse<Types.ProfileDto> = await axios.get(
        Constants.PROFILE_URL, config
      );
      const { data: email }: AxiosResponse<Types.EmailDto> = await axios.get(
        Constants.EMAIL_URL, config
      );
      const { data: photo }: AxiosResponse<Types.PhotoDto> = await axios.get(
        Constants.PHOTO_URL, config
      );

      return {
        id: `${profile.id}`,
        name: `${profile.localizedFirstName} ${profile.localizedLastName}`,
        email: `${email.elements[0]['handle~'].emailAddress}`,
        photoUrl: `${photo.profilePicture['displayImage~'].elements[0].identifiers[0].identifier}`
      };
    } catch (error) {
      throw error instanceof Errors.UnauthorizedError ? error
        : new Errors.InternalServerError('Request limits breach.');
    }
  }
}
