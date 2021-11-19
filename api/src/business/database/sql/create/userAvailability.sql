INSERT INTO
    users_available (owner_id, target_shareable_id)
VALUES
    (${ownerId}, ${targetShareableId})
RETURNING *;
