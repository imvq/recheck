SELECT users.*, companies.name AS company_name
FROM users INNER JOIN companies ON users.company_id = companies.id
WHERE users.id = ${id};
