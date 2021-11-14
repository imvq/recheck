-- Creating table for confirmation codes.
CREATE TABLE IF NOT EXISTS public.confirmations (
    user_id    BIGSERIAL,
    code_value UUID       NOT NULL DEFAULT uuid_generate_v4(),

    -- Index for the primary key will be generated automatically.
    CONSTRAINT cnf_pk PRIMARY KEY(user_id),

    CONSTRAINT cnf_fk_user
        FOREIGN KEY(user_id) REFERENCES public.users(id)
        ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Setting owner.
ALTER TABLE public.confirmations OWNER TO recheck;
