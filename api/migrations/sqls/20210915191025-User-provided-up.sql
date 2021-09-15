-- Creating table for users.
CREATE TABLE IF NOT EXISTS public.users
(
    id                   BIGSERIAL,
    inviter_id           BIGSERIAL,
    private_token        UUID       NOT NULL DEFAULT uuid_generate_v4(),
    shareable_id         UUID       NOT NULL DEFAULT uuid_generate_v4(),
    social_id            TEXT       NOT NULL,
    full_name            TEXT       NOT NULL,
    email                TEXT       NOT NULL,
    photo_url            TEXT       NOT NULL,
    current_position     TEXT       NOT NULL,
    current_work_y_from  VARCHAR(4) NOT NULL,
    current_work_m_from  SMALLINT   NOT NULL,
    reviews_available    INTEGER    NOT NULL,

    -- Indices for unique fields will be generated automatically.
    CONSTRAINT usr_unique_private_token UNIQUE(private_token),
    CONSTRAINT usr_unique_shareable_id  UNIQUE(shareable_id),
    CONSTRAINT usr_unique_email         UNIQUE(email),

    -- Index for the primary key will be generated automatically.
    CONSTRAINT usr_pk_id      PRIMARY KEY(id),
    CONSTRAINT usr_fk_inviter FOREIGN KEY(inviter_id) REFERENCES public.users(id)
);

-- Setting owner.
ALTER TABLE public.users OWNER TO recheck;
