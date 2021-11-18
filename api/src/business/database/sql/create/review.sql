INSERT INTO
    reviews (author_id, target_shareable_id, "content")
VALUES
    (${authorId}, ${targetShareableId}, ${content})
RETURNING *;
