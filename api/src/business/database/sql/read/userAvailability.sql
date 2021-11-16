SELECT
    *
FROM
    users_availability
WHERE
    owner_id = ${askerId}
    AND target_shareable_id = ${targetShareableId};
