import { GET, POST, Path, Context, ServiceContext } from 'typescript-rest';
import { Inject } from 'typescript-ioc';

import Types from '@types';
import LinkedInOAuthService from '@services/LinkedInOAuth';
import DTOs from '@dto';

/**
 * Controller in charge of retrieveing LinkedIn profile info with OAuth.
 */
@Path('/linkedin/oauth')
export default class LinkedInController {
  public constructor(@Inject private readonly injectedService: LinkedInOAuthService) {}

  /**
   * Exchange confirmation code to LinkedIn access token.
   */
  @Path('/exchange')
  @POST
  public async exchangeLinkedInAuthCode(bodyDta: DTOs.ExchangeLinkedInAuthCodeDto)
    : Promise<Types.ExchangeLinkedInAuthCodeResponseDto> {
    return this.injectedService.exchangeLinkedInAuthCode(bodyDta);
  }

  /**
   * Get LinkedIn profile info.
   */
  @Path('/retrieve')
  @GET
  public async getLinkedInProfile(@Context context: ServiceContext)
    : Promise<Types.RetrieveLinkedInProfileInfoResponseDto> {
    return this.injectedService.retrieveProfileInfo(context.request.cookies);
  }
}
