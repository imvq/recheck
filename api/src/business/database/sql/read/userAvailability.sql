SELECT
    *
FROM
    users_available
WHERE
    owner_id = ${askerId}
    AND target_shareable_id = ${targetShareableId};
