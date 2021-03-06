-- Creating table for users.
CREATE TABLE IF NOT EXISTS public.users
(
    id                   BIGSERIAL,
    inviter_id           UUID,
    shareable_id         UUID       NOT NULL DEFAULT uuid_generate_v4(),
    private_token        UUID       NOT NULL DEFAULT uuid_generate_v4(),
    social_id            TEXT       NOT NULL,
    full_name            TEXT       NOT NULL,
    email                TEXT       NOT NULL,
    photo_url            TEXT       NOT NULL,
    current_position     TEXT       NOT NULL,
    current_work_y_from  VARCHAR(4) NOT NULL,
    current_work_m_from  SMALLINT   NOT NULL,
    reviews_available    INTEGER    NOT NULL DEFAULT 0,
    is_deactivated       BOOLEAN    NOT NULL DEFAULT false,

    -- Indices for unique fields will be generated automatically.
    CONSTRAINT usr_unique_shareable_id  UNIQUE(shareable_id),
    CONSTRAINT usr_unique_email         UNIQUE(email),

    -- Index for the primary key will be generated automatically.
    CONSTRAINT usr_pk PRIMARY KEY(id),

    CONSTRAINT usr_fk_inviter
        FOREIGN KEY(inviter_id) REFERENCES public.users(shareable_id)
        ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Setting owner.
ALTER TABLE public.users OWNER TO recheck;
