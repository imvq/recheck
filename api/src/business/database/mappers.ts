import { User, Company } from './entities';

export const mapDatabaseEntityToCompany = (entity: any): Company => ({
  id: entity['id'],
  name: entity['name'],
  logoUrl: entity['logo_url']
});

type WithCompany = { currentCompanyName?: string; };

export const mapDatabaseEntityToUserSelfInfo = (entity: any): User & WithCompany => ({
  id: entity['id'],
  privateToken: entity['private_token'],
  shareableId: entity['shareable_id'],
  socialId: entity['social_id'],
  fullName: entity['full_name'],
  email: entity['email'],
  photoUrl: entity['photo_url'],
  currentPosition: entity['current_position'],
  currentWorkStartYear: entity['current_work_y_from'],
  currentWorkStartMonth: entity['current_work_m_from'],
  confirmationCode: entity['confirmation_code'],
  currentCompanyId: entity['company_id'],
  currentCompanyName: entity['company_name']
});
