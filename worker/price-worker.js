// Price worker - runs 24/7 and saves BTC price to Supabase
// Uses REST API instead of WebSocket to avoid IP blocking

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://oepmupwniliblkuxevyr.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_KEY) {
  console.error('ERROR: SUPABASE_SERVICE_KEY not set');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

console.log('Starting BTC price worker...');
console.log('Supabase:', SUPABASE_URL);

let priceCount = 0;

// Fetch price every second using REST API
async function fetchAndSavePrice() {
  try {
    const res = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
    const data = await res.json();
    const price = parseFloat(data.price);
    
    await supabase.from('price_history_global').insert({ price });
    priceCount++;
    
    if (priceCount % 10 === 0) {
      console.log(`Saved price: $${price.toFixed(2)} (count: ${priceCount})`);
    }
  } catch (e) {
    console.error('Error fetching price:', e.message);
  }
}

// Start fetching
fetchAndSavePrice();
setInterval(fetchAndSavePrice, 1000);

// Keep process alive
process.on('SIGTERM', () => {
  console.log('Shutting down...');
  process.exit(0);
});

console.log('Worker running - fetching BTC price every second');
