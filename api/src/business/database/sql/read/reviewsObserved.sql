SELECT
    reviews.*,
    users.*
FROM
    users
    INNER JOIN reviews ON users.shareable_id = reviews.target_shareable_id
WHERE users.shareable_id = ${targetShareableId}
ORDER BY
    reviews.creation_date DESC;
