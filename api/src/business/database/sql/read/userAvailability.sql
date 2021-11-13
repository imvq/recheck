SELECT *
FROM public.users_availability
WHERE owner_private_token = ${privateToken} AND target_shareable_id = ${targetShareableId};
