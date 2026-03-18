import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://oepmupwniliblkuxevyr.supabase.co',
  process.env.SUPABASE_SERVICE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lcG11cHduaWxpYmxrdXhldnlyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzY3MDY3OSwiZXhwIjoyMDg5MjQ2Njc5fQ.FjlfBgNDUO7Skhgg-hpq3vVYrDaMOn3M4afhvkat9Wg'
);

// Cron runs every minute - save current BTC price
export async function GET() {
  try {
    // Fetch current BTC price from Binance
    const res = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
    const data = await res.json();
    const price = parseFloat(data.price);
    
    // Save to database
    await supabase
      .from('price_history_global')
      .insert({ price });
    
    return Response.json({ success: true, price: price });
  } catch(e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
