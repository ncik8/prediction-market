import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper to fetch markets
export async function getMarkets() {
  const { data, error } = await supabase
    .from('markets')
    .select('*')
    .eq('status', 'ACTIVE')
  return { data, error }
}

// Helper to create/update user profile
export async function getOrCreateProfile(telegramId: string, username?: string) {
  // Check if exists
  const { data: existing } = await supabase
    .from('profiles')
    .select('*')
    .eq('telegram_id', telegramId)
    .single()
  
  if (existing) return existing
  
  // Create new
  const { data: newProfile, error } = await supabase
    .from('profiles')
    .insert({
      telegram_id: telegramId,
      username: username || `User_${telegramId.slice(-4)}`,
      balance: 10000
    })
    .select()
    .single()
  
  return newProfile
}

// Helper to place bet
export async function placeBet(userId: string, marketId: string, type: string, amount: number) {
  const { data, error } = await supabase
    .from('bets')
    .insert({
      user_id: userId,
      market_id: marketId,
      type: type,
      amount: amount
    })
    .select()
  
  return { data, error }
}
