-- =====================================================
-- EyLive Database
-- Admin
-- =====================================================

create table if not exists public.admins (

  user_id uuid primary key
  references auth.users(id)
  on delete cascade,

  role text default 'admin',

  created_at timestamptz default now()
);

create table if not exists public.super_admins (

  user_id uuid primary key
  references auth.users(id)
  on delete cascade,

  created_at timestamptz default now()
);
