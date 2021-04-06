import scrapedin from 'scrapedin';

import Dtos from '@dto';
import Logger from '@common/Logger';

export default class LinkedInService {
  public async isProfileLinkReal(linkData: Dtos.CheckLinkedInLinkDto)
    : Promise<void> {
    const profileScraper = await scrapedin({
      email: process.env.LINKEDIN_SCRAPER_USERNAME,
      password: process.env.LINKEDIN_SCRAPER_PASSWORD
    });
    const profile = await profileScraper(linkData.link);
    Logger.ifdev()?.log(JSON.stringify(profile));
  }
}
