SELECT
    users.*
FROM
    users
    INNER JOIN confirmations ON confirmations.user_id = users.id
WHERE
    confirmations.code_value = ${code};
