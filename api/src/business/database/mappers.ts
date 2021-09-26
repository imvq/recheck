import { User, Company, NameToken, Review, UserConfirmation } from './entities';

export const mapDatabaseEntityToCompany = (entity: any): Company => ({
  id: entity['id'],
  name: entity['name'],
  logoUrl: entity['logo_url']
});

export const mapDatabaseEntityToUser = (entity: any): User => ({
  id: entity['id'],
  privateToken: entity['private_token'],
  shareableId: entity['shareable_id'],
  socialId: entity['social_id'],
  fullName: entity['full_name'],
  email: entity['email'],
  photoUrl: entity['photo_url'],
  currentPosition: entity['current_position'],
  currentWorkStartingYear: entity['current_work_y_from'],
  currentWorkStartingMonth: entity['current_work_m_from'],
  reviewsAvailable: entity['reviews_available'],
  confirmationCode: entity['confirmation_code']
});
