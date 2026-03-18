import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch 150 minutes of 1-minute klines from Binance
    const res = await fetch('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=150');
    
    if (!res.ok) {
      throw new Error('Failed to fetch from Binance');
    }
    
    const data = await res.json();
    
    // Extract close prices (index 4)
    const prices = data.map(k => parseFloat(k[4]));
    
    return NextResponse.json({ prices });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
