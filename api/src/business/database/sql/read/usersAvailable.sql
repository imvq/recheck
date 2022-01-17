SELECT
    *
FROM
    users
    INNER JOIN users_available ON users.shareable_id = users_available.target_shareable_id
    INNER JOIN companies ON users.company_id = companies.id
WHERE
    users.id > ${last}
    AND users_available.owner_id = ${ownerId}
ORDER BY
    users.id
LIMIT
    5;
