-- =====================================================
-- EyLive Database
-- Gifts
-- =====================================================

create table if not exists public.gifts (

  id uuid primary key default gen_random_uuid(),

  name text not null,

  image_url text,

  price bigint not null,

  animation text,

  enabled boolean default true,

  created_at timestamptz default now()
);

create table if not exists public.gift_transactions (

  id uuid primary key default gen_random_uuid(),

  sender_id uuid
  references auth.users(id),

  receiver_id uuid
  references auth.users(id),

  room_id uuid
  references public.rooms(id),

  gift_id uuid
  references public.gifts(id),

  quantity integer default 1,

  total_price bigint,

  created_at timestamptz default now()
);
