-- Creating table for reviews.
CREATE TABLE IF NOT EXISTS public.reviews
(
    author_id            BIGSERIAL,
    target_shareable_id  UUID,
    content              TEXT                        NOT NULL,
    creation_date        TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT (now() at time zone 'utc'),

    -- Index for the primary key will be generated automatically.
    CONSTRAINT reviews_pk PRIMARY KEY(author_id, target_shareable_id),

    CONSTRAINT reviews_fk_author
        FOREIGN KEY(author_id) REFERENCES public.users(id)
        ON UPDATE NO ACTION ON DELETE NO ACTION,

    CONSTRAINT reviews_fk_target
        FOREIGN KEY(target_shareable_id) REFERENCES public.users(shareable_id)
        ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Setting owner.
ALTER TABLE public.reviews OWNER TO recheck;
