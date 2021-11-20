SELECT
    users.*,
    companies.id AS company_id,
    companies.company_name AS company_name
FROM
    name_tokens_bindings
    INNER JOIN name_tokens ON name_tokens_bindings.name_token_id = name_tokens.id
    INNER JOIN users ON name_tokens_bindings.user_id = users.id
    INNER JOIN companies ON companies.id = users.company_id
WHERE
    name_tokens.token_value IN ($tokens:list);
