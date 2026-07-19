-- =====================================================
-- EyLive Database
-- Wallet
-- =====================================================

create table if not exists public.wallets (

  user_id uuid primary key
  references auth.users(id)
  on delete cascade,

  coins bigint default 0,

  diamonds bigint default 0,

  updated_at timestamptz default now()
);

create table if not exists public.wallet_transactions (

  id uuid primary key default gen_random_uuid(),

  user_id uuid
  references auth.users(id)
  on delete cascade,

  transaction_type text,

  amount bigint,

  description text,

  created_at timestamptz default now()
);
