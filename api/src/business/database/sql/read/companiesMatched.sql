SELECT
    *
FROM
    companies
LIMIT
    10
WHERE
    LOWER(companies.company_name) LIKE ${sequence};

