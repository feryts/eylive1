-- EyLive Database
-- Profiles

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,

  username text unique,
  full_name text,
  avatar_url text,
  bio text,

  gender text,
  birth_date date,

  country text,
  city text,

  level integer default 1,

  coins bigint default 0,
  diamonds bigint default 0,

  is_vip boolean default false,
  is_admin boolean default false,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Profiles Select"
on public.profiles
for select
to authenticated
using (true);

create policy "Profiles Insert"
on public.profiles
for insert
to authenticated
with check (auth.uid() = id);

create policy "Profiles Update"
on public.profiles
for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);
