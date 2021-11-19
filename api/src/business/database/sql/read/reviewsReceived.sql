SELECT
    reviews.*, users.*
FROM
    users
    INNER JOIN reviews ON users.shareable_id = reviews.target_shareable_id
WHERE users.private_token = ${privateToken}
ORDER BY
    reviews.creation_date DESC;
