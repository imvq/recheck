SELECT
    *
FROM
    companies
WHERE
    LOWER(companies.company_name) LIKE ${sequence}
LIMIT
    10;
