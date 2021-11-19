UPDATE
    users
SET
    reviews_available = reviews_available - 1
WHERE
    private_token = ${privateToken};
