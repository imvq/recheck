INSERT INTO
    confirmations (user_id)
VALUES
    (${userId})
RETURNING *;
