SELECT
    *
FROM
    users
    INNER JOIN (SELECT * FROM companies WHERE companies.id > ${last}) c ON users.company_id = c.id
WHERE
    c.logo_url IS NOT NULL
LIMIT
    12
ORDER BY
    c.id;
