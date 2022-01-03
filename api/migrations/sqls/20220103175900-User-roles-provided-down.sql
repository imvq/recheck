DROP TYPE IF EXISTS role;

ALTER TABLE public.users
    DROP COLUMN last_role;
