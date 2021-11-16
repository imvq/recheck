SELECT
    count(*)
FROM
    reviews
WHERE
    reviews.target_shareable_id = ${targetShareableId};
