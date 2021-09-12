import BodyGuard from 'typescript-rest-body-guard';

import { Inject } from 'typescript-ioc';
import { GET, POST, Path, Context, ServiceContext } from 'typescript-rest';

import dto from '@dto';
import LinkedInOAuthService from '@services/OAuthLinkedIn';

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
  public async getLinkedInProfileBasic(@Context context: ServiceContext) {
    return this.injectedService.retrieveProfileInfo(context.request.cookies);
  }

  /**
   * Exchange confirmation code to LinkedIn access token.
   */
  @Path('/exchange')
  @BodyGuard
  @POST
  public async exchangeLinkedInAuthCode(bodyDta: dto.ExchangeLinkedInAuthCodeDto) {
    return this.injectedService.exchangeLinkedInAuthCode(bodyDta);
  }
}
