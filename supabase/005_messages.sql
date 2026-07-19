-- =====================================================
-- EyLive Database
-- Messages
-- =====================================================

create table if not exists public.messages (

  id uuid primary key default gen_random_uuid(),

  sender_id uuid references auth.users(id),

  receiver_id uuid references auth.users(id),

  message text,

  message_type text default 'text',

  is_read boolean default false,

  created_at timestamptz default now()
);
