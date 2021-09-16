-- Creating table for companies.
CREATE TABLE IF NOT EXISTS public.companies
(
    id           BIGSERIAL,
    company_name TEXT       NOT NULL,
    logo_url     TEXT,

    -- Index for the primary key will be generated automatically.
    CONSTRAINT companies_pk PRIMARY KEY(id)
);

-- Setting relation to users.
ALTER TABLE public.users
    ADD COLUMN company_id BIGSERIAL,

    ADD CONSTRAINT usr_fk_company FOREIGN KEY(company_id) REFERENCES public.companies(id);

-- Setting owner.
ALTER TABLE public.companies OWNER TO recheck;
