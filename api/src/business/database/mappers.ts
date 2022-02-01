export const normalizeCompany = (entity: any) => ({
  id: `${entity['id']}`,
  name: `${entity['company_name']}`,
  logoUrl: `${entity['logo_url']}`
});

export const normalizeCreatedUser = (entity: any) => ({
  id: `${entity['id']}`,
  email: `${entity['email']}`
});

export const normalizeConfirmation = (entity: any) => ({
  codeValue: entity['code_value']
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

export const normalizeOrderedUserInfo = (entity: any) => ({
  ...normalizePublicUserInfo(entity),
  id: entity.id
});

export const normalizeSearchedUserInfo = (entity: any) => ({
  ...normalizePublicUserInfo(entity),
  currentCompanyLogoUrl: entity['logo_url']
});

export const normalizePersonalUserInfo = (entity: any) => ({
  ...normalizePublicUserInfo(entity),
  privateToken: entity['private_token'],
  socialId: entity['social_id'],
  email: entity['email'],
  inviterId: entity['inviter_id']
});

export const normalizeUserIdentifier = (entity: any) => ({
  id: entity['id']
});

function censorWord(word: string) {
  return `${word[0]}${'*'.repeat(word.length - 1)}`;
}

function censorEmail(email: string) {
  const emailParts = email.split('@');

  return `${censorWord(emailParts[0])}@${emailParts[1]}`;
}

export const normalizeReviewWithTarget = (entity: any) => ({
  authorCompany: entity['author_company'],
  authorPosition: entity['author_position'],
  authorEmail: censorEmail(entity['author_email']),
  targetShareableId: entity['target_shareable_id'],
  targetPhotoUrl: entity['photo_url'],
  targetName: entity['full_name'],
  targetPosition: entity['current_position'],
  targetCompanyName: entity['company_name'],
  date: entity['creation_date'],
  content: entity['content']
});
