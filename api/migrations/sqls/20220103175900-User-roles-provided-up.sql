CREATE TYPE ROLE AS ENUM ('recruiter', 'candidate');

ALTER TABLE public.users
    ADD COLUMN last_role ROLE DEFAULT 'recruiter';
