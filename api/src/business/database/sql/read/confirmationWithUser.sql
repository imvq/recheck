SELECT confirmations.*, users.id as user_id
FROM confirmations INNER JOIN users ON confirmations.id = users.id
WHERE confirmations.code_value = ${confirmationCode} AND users.social_id = ${socialId};
