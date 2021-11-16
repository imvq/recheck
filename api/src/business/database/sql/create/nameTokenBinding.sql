INSERT INTO
    name_tokens_bindings (user_id, name_token_id)
VALUES
    (${userId}, ${tokenId})
RETURNING *;
