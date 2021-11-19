SELECT
    users.*
FROM
    users
    INNER JOIN companies ON users.company_id = companies.id
WHERE
    users.company_id = ${companyId};
