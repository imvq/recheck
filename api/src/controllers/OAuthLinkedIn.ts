import { GET, POST, Path, Context, ServiceContext } from 'typescript-rest';
import { Inject } from 'typescript-ioc';
import BodyGuard from 'typescript-rest-body-guard';

import dto from '@dto';
import LinkedInOAuthService from '@services/OAuthLinkedIn';

import * as apiResponses from '@typing/apiResponses';

/**
 * Controller in charge of retrieveing LinkedIn profile info with OAuth.
 */
@Path('/linkedin/oauth')
export default class LinkedInController {
  public constructor(@Inject private readonly injectedService: LinkedInOAuthService) {}

  /**
   * Get LinkedIn profile info.
   */
  @Path('/retrieve')
  @GET
  public async getLinkedInProfileBasic(@Context context: ServiceContext)
    : Promise<apiResponses.IRetrieveLinkedInProfileInfoResponseDto> {
    return this.injectedService.retrieveProfileInfo(context.request.cookies);
  }

  /**
   * Exchange confirmation code to LinkedIn access token.
   */
  @Path('/exchange')
  @BodyGuard
  @POST
  public async exchangeLinkedInAuthCode(bodyDta: dto.ExchangeLinkedInAuthCodeDto)
    : Promise<apiResponses.IExchangeLinkedInAuthCodeResponseDto> {
    return this.injectedService.exchangeLinkedInAuthCode(bodyDta);
  }
}
