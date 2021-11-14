-- Creating table for users available.
CREATE TABLE IF NOT EXISTS public.users_available (
    owner_id            BIGSERIAL,
    target_shareable_id UUID,

    -- Index for the primary key will be generated automatically.
    CONSTRAINT usr_avl_pk PRIMARY KEY(owner_id, target_shareable_id),

    CONSTRAINT usr_avl_owner
        FOREIGN KEY(owner_id) REFERENCES public.users(id)
        ON UPDATE NO ACTION ON DELETE NO ACTION,

    CONSTRAINT usr_avl_target
        FOREIGN KEY(target_shareable_id) REFERENCES public.users(shareable_id)
        ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Setting owner.
ALTER TABLE public.users_available OWNER TO recheck;
