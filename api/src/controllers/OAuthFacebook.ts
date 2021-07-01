import { GET, Path, Context, ServiceContext } from 'typescript-rest';
import { Inject } from 'typescript-ioc';

import * as apiResponses from '@typing/apiResponses';
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
  @Path('/retrieve/basic')
  @GET
  public async getFacebookProfileBasic(@Context context: ServiceContext)
    : Promise<apiResponses.IRetrieveFacebookProfileInfoResponseDto> {
    return this.injectedService.retrieveProfileInfo(context.request.cookies);
  }

  /**
   * Get Facebook profile info.
   */
  @Path('/retrieve/with-email')
  @GET
  public async getFacebookProfileWithEmail(@Context context: ServiceContext)
    : Promise<apiResponses.IRetrieveFacebookProfileInfoResponseDto> {
    return this.injectedService.retrieveProfileInfo(context.request.cookies, { withEmail: true });
  }
}
