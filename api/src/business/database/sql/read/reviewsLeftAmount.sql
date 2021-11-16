SELECT
    count(*)
FROM
    reviews
WHERE
    reviews.author_id = ${authorId};
