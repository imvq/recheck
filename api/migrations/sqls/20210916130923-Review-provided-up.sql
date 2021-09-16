CREATE TABLE IF NOT EXISTS public.reviews
(
    id            BIGSERIAL,
    author_id     BIGSERIAL,
    target_id     BIGSERIAL,
    content       TEXT                        NOT NULL,
    creation_date TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT (now() at time zone 'utc'),

    -- Index for the primary key will be generated automatically.
    CONSTRAINT reviews_pk PRIMARY KEY(id),

    CONSTRAINT reviews_fk_author FOREIGN KEY(author_id) REFERENCES public.users(id),
    CONSTRAINT reviews_fk_target FOREIGN KEY(target_id) REFERENCES public.users(id)
);

-- Setting owner.
ALTER TABLE public.reviews OWNER TO recheck;
