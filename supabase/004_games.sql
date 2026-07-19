-- =====================================================
-- EyLive Database
-- Games
-- =====================================================

create table if not exists public.games (

  id uuid primary key default gen_random_uuid(),

  name text not null,

  icon text,

  enabled boolean default true,

  min_level integer default 1,

  min_vip integer default 0,

  created_at timestamptz default now()
);

create table if not exists public.game_permissions (

  user_id uuid primary key
  references auth.users(id)
  on delete cascade,

  enabled boolean default false,

  enabled_by uuid references auth.users(id),

  enabled_at timestamptz
);
