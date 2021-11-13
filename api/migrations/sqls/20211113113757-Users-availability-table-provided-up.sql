-- Creating table for users available.
CREATE TABLE IF NOT EXISTS public.users_available (
    owner_private_token UUID,
    target_shareable_id UUID,

    -- Index for the primary key will be generated automatically.
    CONSTRAINT usr_avl_pk_id       PRIMARY KEY(owner_private_token, target_shareable_id),
    CONSTRAINT usr_avl_owner_pt    FOREIGN KEY(owner_private_token) REFERENCES public.users(private_token),
    CONSTRAINT usr_avl_target_shid FOREIGN KEY(target_shareable_id) REFERENCES public.users(shareable_id)
);

-- Setting owner.
ALTER TABLE public.users_available OWNER TO recheck;
