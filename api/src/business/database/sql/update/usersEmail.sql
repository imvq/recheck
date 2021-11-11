UPDATE public.users SET email = ${email}
WHERE private_token = ${privateToken};
