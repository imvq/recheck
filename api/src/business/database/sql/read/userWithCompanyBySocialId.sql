SELECT users.*, companies.id AS company_id, companies.name AS company_name
FROM users INNER JOIN companies ON users.company_id = companies.id
WHERE users.social_id = ${social_id};
