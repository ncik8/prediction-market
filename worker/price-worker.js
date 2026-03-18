// Price worker - runs 24/7 and saves BTC price to Supabase
// Deploy to: Railway, Fly.io, Render, or cheap VPS

import { createClient } from '@supabase/supabase-js';
import WebSocket from 'ws';

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://oepmupwniliblkuxevyr.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_KEY) {
  console.error('ERROR: SUPABASE_SERVICE_KEY not set');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

console.log('Starting BTC price worker...');
console.log('Supabase:', SUPABASE_URL);

// Connect to Binance WebSocket
const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

let priceCount = 0;
let lastSave = Date.now();

ws.on('open', () => {
  console.log('Connected to Binance WebSocket');
});

ws.on('message', async (data) => {
  try {
    const trade = JSON.parse(data);
    const price = parseFloat(trade.p);
    priceCount++;
    
    // Save to Supabase
    await supabase.from('price_history_global').insert({ price });
    
    // Log every 10 prices
    if (priceCount % 10 === 0) {
      console.log(`Saved price: $${price.toFixed(2)} (count: ${priceCount})`);
    }
  } catch (e) {
    console.error('Error:', e.message);
  }
});

ws.on('error', (err) => {
  console.error('WebSocket error:', err.message);
});

ws.on('close', () => {
  console.log('WebSocket closed, reconnecting...');
  setTimeout(() => {
    ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
  }, 5000);
});

// Keep process alive
process.on('SIGTERM', () => {
  console.log('Shutting down...');
  ws.close();
  process.exit(0);
});
