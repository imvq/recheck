UPDATE
    users
SET
    last_role = ${role}
WHERE
    social_id = ${socialId};
