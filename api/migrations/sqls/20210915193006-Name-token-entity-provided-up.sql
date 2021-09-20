-- Creating table for name tokens.
CREATE TABLE IF NOT EXISTS public.name_tokens
(
    id          bigserial,
    token_value text       NOT NULL,

    -- Indices for unique fields will be generated automatically.
    CONSTRAINT nt_unique_token_value UNIQUE(token_value),

    -- Index for the primary key will be generated automatically.
    CONSTRAINT nt_pk_id PRIMARY KEY(id)
);

-- Creating table for name tokens bindings.
CREATE TABLE IF NOT EXISTS public.name_tokens_bindings
(
    name_token_id bigserial,
    user_id       bigserial,

    -- Index for the primary key will be generated automatically.
    CONSTRAINT ntb_pk_id         PRIMARY KEY(name_token_id, user_id),
    CONSTRAINT ntb_fk_name_token FOREIGN KEY(name_token_id) REFERENCES public.name_tokens(id),
    CONSTRAINT ntb_fk_user       FOREIGN KEY(user_id)       REFERENCES public.users(id)
);

-- Setting owner.
ALTER TABLE public.name_tokens OWNER TO recheck;
ALTER TABLE public.name_tokens_bindings OWNER TO recheck;
