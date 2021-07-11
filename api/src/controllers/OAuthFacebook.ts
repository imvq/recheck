import { GET, POST, Path, Context, ServiceContext } from 'typescript-rest';
import { Inject } from 'typescript-ioc';

import dto from '@dto';
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
  @Path('/retrieve')
  @GET
  public async getFacebookProfileBasic(@Context context: ServiceContext)
    : Promise<apiResponses.IRetrieveFacebookProfileInfoResponseDto> {
    return this.injectedService.retrieveProfileInfo(context.request.cookies);
  }

  /**
   * Get reduced Facebook profile info.
   */
  @Path('/retrieve-reduced')
  @POST
  public async getFacebookProfileBasicReduced(bodyData: dto.RetrievePorfileInfoReduced)
    : Promise<apiResponses.IRetrieveFacebookProfileOnfoReducedResponseDto> {
    return this.injectedService.retrievePorfileInfoReduced(bodyData.profileId);
  }
}
