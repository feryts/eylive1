-- =====================================================
-- EyLive Database
-- Notifications
-- =====================================================

create table if not exists public.notifications (

  id uuid primary key default gen_random_uuid(),

  user_id uuid
  references auth.users(id)
  on delete cascade,

  title text not null,

  body text,

  type text,

  is_read boolean default false,

  created_at timestamptz default now()
);
