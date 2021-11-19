SELECT
    reviews.*, target_.*
FROM
    users
    INNER JOIN reviews ON users.id = reviews.author_id
    INNER JOIN users target_ ON target_.shareable_id = reviews.target_shareable_id
WHERE users.private_token = ${privateToken}
ORDER BY
    reviews.creation_date DESC;
