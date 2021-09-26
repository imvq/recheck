SELECT users.*, confirmations.code_value as confirmation_code
FROM users INNER JOIN confirmations ON users.id = confirmations.user_id;
