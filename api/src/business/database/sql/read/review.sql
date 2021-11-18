SELECT
    *
FROM
    reviews
WHERE
    author_id = ${authorId}
    AND target_shareable_id = ${targetShareableId};
