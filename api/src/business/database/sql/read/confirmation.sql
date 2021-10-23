SELECT *
FROM confirmations INNER JOIN users ON confirmations.id = users.id
WHERE users.social_id = ${userSocialId};
