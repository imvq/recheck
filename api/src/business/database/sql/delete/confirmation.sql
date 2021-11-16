DELETE FROM
    confirmations
WHERE
    code_value = ${confirmationCode}
RETURNING *;
