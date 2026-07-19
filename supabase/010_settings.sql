-- =====================================================
-- EyLive Database
-- Settings
-- =====================================================

create table if not exists public.settings (

  id uuid primary key default gen_random_uuid(),

  key text unique,

  value text,

  created_at timestamptz default now()
);
