-- Creating table for confirmation codes.
CREATE TABLE IF NOT EXISTS public.confirmations (
    id         BIGSERIAL,
    user_id    BIGSERIAL,
    code_value UUID       NOT NULL DEFAULT uuid_generate_v4(),

    -- Index for the primary key will be generated automatically.
    CONSTRAINT cnf_pk_id   PRIMARY KEY(id),
    CONSTRAINT cnf_kf_user FOREIGN KEY(user_id) REFERENCES public.users(id)
);

-- Setting owner.
ALTER TABLE public.confirmation OWNER TO recheck;
