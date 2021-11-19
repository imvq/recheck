export const normalizeCreatedUser = (entity: any) => ({
  id: `${entity['id']}`,
  email: `${entity['email']}`,
  confirmationCode: `${entity['confirmation_code']}`
});

export const normalizePublicUserInfo = (entity: any) => ({
  fullName: entity['full_name'],
  shareableId: entity['shareable_id'],
  photoUrl: entity['photo_url'],
  currentPosition: entity['current_position'],
  currentWorkYearFrom: entity['current_work_y_from'],
  currentWorkMonthFrom: entity['current_work_m_from'],
  currentCompanyId: entity['company_id'],
  currentCompanyName: entity['company_name']
});

export const normalizeSearchedUserInfo = (entity: any) => ({
  ...normalizePublicUserInfo(entity),
  currentCompanyLogoUrl: entity['logo_url']
});

export const normalizePersonalUserInfo = (entity: any) => ({
  ...normalizePublicUserInfo(entity),
  privateToken: entity['private_token'],
  socialId: entity['social_id'],
  email: entity['email']
});

export const normalizeConfirmationEntity = (entity: any) => ({
  id: entity['id'],
  codeValue: entity['code_value'],
  userId: entity['user_id']
});

export const normalizeReviewWithTarget = (entity: any) => ({
  targetShareableId: entity['target_shareable_id'],
  targetPhotoUrl: entity['photo_url'],
  targetName: entity['full_name'],
  targetPosition: entity['current_position'],
  targetCompanyName: entity['company_name'],
  date: entity['creation_date'],
  content: entity['content']
});
