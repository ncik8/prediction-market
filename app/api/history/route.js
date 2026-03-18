import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Try CoinGecko API (more server-friendly)
    const res = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=minute');
    
    if (!res.ok) {
      throw new Error('Failed to fetch from CoinGecko');
    }
    
    const data = await res.json();
    
    // Extract prices from the response
    const prices = data.prices.map(p => p[1]); // [timestamp, price]
    
    // Take last 150 points
    const last150 = prices.slice(-150);
    
    return NextResponse.json({ prices: last150 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
