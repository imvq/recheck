CREATE TYPE ROLE AS ENUM ('recruiter', 'randidate');

ALTER TABLE public.users
    ADD COLUMN last_role ROLE DEFAULT 'recruiter';
