INSERT INTO
    reviews (author_id, author_company, author_position, author_email, target_shareable_id, "content")
VALUES
    (${authorId}, ${targetShareableId}, ${content})
RETURNING *;
