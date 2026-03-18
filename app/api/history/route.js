import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Try multiple APIs
    
    // 1. Try CoinGecko
    const cgRes = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=minute', {
      headers: { 'Accept': 'application/json' }
    });
    
    if (cgRes.ok) {
      const data = await cgRes.json();
      const prices = data.prices.map(p => p[1]).slice(-150);
      return NextResponse.json({ prices, source: 'coingecko' });
    }
    
    // 2. Try Binance via different domain
    const binRes = await fetch('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=150');
    if (binRes.ok) {
      const data = await binRes.json();
      const prices = data.map(k => parseFloat(k[4]));
      return NextResponse.json({ prices, source: 'binance' });
    }
    
    throw new Error('All APIs failed');
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
