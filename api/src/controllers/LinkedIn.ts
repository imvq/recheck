import { Path, POST } from 'typescript-rest';
import { Inject } from 'typescript-ioc';

import Dtos from '@dto';
import LinkedInService from '@services/LinkedIn';

@Path('/linkedin')
export default class LinkedInController {
  public constructor(@Inject private readonly injectedService: LinkedInService) {}

  /**
   * Check if the provided link is a real LinkedIn public profile page link.
   */
  @POST
  @Path('/check')
  public isProfileLinkReal(linkData: Dtos.CheckLinkedInLinkDto): Promise<void> {
    return this.injectedService.isProfileLinkReal(linkData);
  }
}
