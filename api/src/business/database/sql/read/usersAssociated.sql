SELECT
    users.*,
    companies.company_name
FROM
    users
    INNER JOIN companies ON users.company_id = companies.id
WHERE
    users.id > ${last}
    AND users.inviter_id = ${ownerShareableId}
ORDER BY
    users.id
LIMIT
    5;

