INSERT INTO users (
  inviter_id, social_id, full_name, email, photo_url,
  current_position, current_work_y_from, current_work_m_from, company_id
) VALUES (
  ${inviterId}, ${socialId}, ${fullName}, ${email}, ${photoUrl},
  ${currentPosition}, ${currentWorkYearFrom}, ${currentWorkMonthFrom}, ${companyId}
) RETURNING *;
