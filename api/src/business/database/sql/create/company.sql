INSERT INTO
    companies (company_name)
VALUES
    (${name})
RETURNING *;
