SELECT
    *
FROM
    confirmations
    INNER JOIN users ON confirmations.user_id = users.id
WHERE
    users.social_id = ${socialId};
