-- =====================================================
-- EyLive Database
-- Rooms
-- =====================================================

create table if not exists public.rooms (
  id uuid primary key default gen_random_uuid(),

  owner_id uuid references auth.users(id) on delete cascade,

  title text not null,
  description text,

  category text,

  cover_url text,
  background_url text,

  current_users integer default 0,

  max_users integer default 5000,
  max_mics integer default 20,

  is_locked boolean default false,
  room_password text,

  allow_games boolean default true,
  allow_gifts boolean default true,

  is_active boolean default true,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.rooms enable row level security;

create policy "Rooms Select"
on public.rooms
for select
to authenticated
using (true);
