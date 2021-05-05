import { GET, Path, Context, ServiceContext } from 'typescript-rest';
import { Inject } from 'typescript-ioc';

import * as ApiResponses from '@typing/apiResponses';
import FacebookOAuthService from '@services/OAuthFacebook';

/**
 * Controller in charge of retrieveing Facebook profile info with OAuth.
 */
@Path('/facebook/oauth')
export default class FacebookController {
  public constructor(@Inject private readonly injectedService: FacebookOAuthService) {}

  /**
   * Get Facebook profile info.
   */
  @Path('/retrieve')
  @GET
  public async getFacebookProfile(@Context context: ServiceContext)
    : Promise<ApiResponses.IRetrieveFacebookProfileInfoResponseDto> {
    return this.injectedService.retrieveProfileInfo(context.request.cookies);
  }
}
