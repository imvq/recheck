-- Creating table for name tokens.
CREATE TABLE IF NOT EXISTS public.name_tokens
(
    id          BIGSERIAL,
    token_value TEXT       NOT NULL,

    -- Indices for unique fields will be generated automatically.
    CONSTRAINT nt_unique_token_value UNIQUE(token_value),

    -- Index for the primary key will be generated automatically.
    CONSTRAINT nt_pk PRIMARY KEY(id)
);

-- Creating table for name tokens bindings.
CREATE TABLE IF NOT EXISTS public.name_tokens_bindings
(
    name_token_id BIGSERIAL,
    user_id       BIGSERIAL,

    -- Index for the primary key will be generated automatically.
    CONSTRAINT ntb_pk PRIMARY KEY(name_token_id, user_id),

    CONSTRAINT ntb_fk_name_token
        FOREIGN KEY(name_token_id) REFERENCES public.name_tokens(id)
        ON UPDATE NO ACTION ON DELETE CASCADE,

    CONSTRAINT ntb_fk_user
        FOREIGN KEY(user_id) REFERENCES public.users(id)
        ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Setting owner.
ALTER TABLE public.name_tokens OWNER TO recheck;
ALTER TABLE public.name_tokens_bindings OWNER TO recheck;
