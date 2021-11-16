export const normalizeCreatedUser = (entity: any) => ({
  id: `${entity['id']}`,
  email: `${entity['email']}`,
  confirmationCode: `${entity['confirmation_code']}`
});

export const normalizePersonalUserInfo = (entity: any) => ({
  privateToken: entity['private_token'],
  shareableId: entity['shareable_id'],
  socialId: entity['social_id'],
  fullName: entity['full_name'],
  email: entity['email'],
  photoUrl: entity['photo_url'],
  currentPosition: entity['current_position'],
  currentWorkYearFrom: entity['current_work_y_from'],
  currentWorkMonthFrom: entity['current_work_m_from'],
  currentCompanyId: entity['company_id'],
  currentCompanyName: entity['company_name']
});

export const normalizeConfirmationEntity = (entity: any) => ({
  id: entity['id'],
  codeValue: entity['code_value'],
  userId: entity['user_id']
});
