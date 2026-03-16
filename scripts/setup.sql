-- Create users table (extends auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  telegram_id TEXT UNIQUE,
  username TEXT,
  balance DECIMAL DEFAULT 10000,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create markets table
CREATE TABLE public.markets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  asset TEXT NOT NULL,
  beat_price DECIMAL,
  timeframe TEXT DEFAULT '5min',
  status TEXT DEFAULT 'ACTIVE',
  end_time TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create bets table
CREATE TABLE public.bets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id),
  market_id UUID REFERENCES public.markets(id),
  type TEXT NOT NULL, -- 'UP' or 'DOWN'
  amount DECIMAL NOT NULL,
  cashed_out BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.markets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bets ENABLE ROW LEVEL SECURITY;

-- Simple policies (for demo)
CREATE POLICY "Public profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Public markets" ON public.markets FOR SELECT USING (true);
CREATE POLICY "Public bets" ON public.bets FOR SELECT USING (true);
CREATE POLICY "Insert profiles" ON public.profiles FOR INSERT WITH CHECK (true);
CREATE POLICY "Insert bets" ON public.bets FOR INSERT WITH CHECK (true);

-- Insert sample market
INSERT INTO markets (question, asset, beat_price, timeframe, status)
VALUES ('Will BTC go up or down in next 5 minutes?', 'BTC', 73000, '5min', 'ACTIVE');
