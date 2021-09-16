SELECT * FROM confirmations INNER JOIN users ON confirmations.id = users.id
WHERE users.id = ${userId};
