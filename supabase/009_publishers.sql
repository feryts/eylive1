-- =====================================================
-- EyLive Database
-- Publishers
-- =====================================================

create table if not exists public.publishers (

  user_id uuid primary key
  references auth.users(id)
  on delete cascade,

  agency_id uuid,

  status text default 'active',

  created_at timestamptz default now()
);
