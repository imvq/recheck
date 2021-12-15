SELECT
    reviews.*,
    target_.*,
    target_company.company_name AS company_name
FROM
    users
    INNER JOIN reviews ON users.id = reviews.author_id
    INNER JOIN users target_ ON target_.shareable_id = reviews.target_shareable_id
    INNER JOIN companies target_company ON target_company.id = target_.company_id
WHERE users.private_token = ${privateToken}
ORDER BY
    reviews.creation_date DESC;
