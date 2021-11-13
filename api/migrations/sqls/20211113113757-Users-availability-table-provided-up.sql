-- Creating table for users available.
CREATE TABLE IF NOT EXISTS public.users_available (
    owner_id  BIGSERIAL,
    target_id BIGSERIAL,

    -- Index for the primary key will be generated automatically.
    CONSTRAINT usr_avl_pk_id     PRIMARY KEY(owner_id, target_id),
    CONSTRAINT usr_avl_owner_id  FOREIGN KEY(owner_id)  REFERENCES public.users(id),
    CONSTRAINT usr_avl_target_id FOREIGN KEY(target_id) REFERENCES public.users(id)
);

-- Setting owner.
ALTER TABLE public.users_available OWNER TO recheck;
