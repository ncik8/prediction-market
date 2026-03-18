import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  // For now, generate realistic historical data since external APIs are blocked
  // In production, we'd need to store data in Supabase or use a proxy
  
  const currentPrice = 74000; // Approximate BTC price
  const prices = [];
  let price = currentPrice;
  
  // Generate 150 points of realistic-looking data
  for (let i = 0; i < 150; i++) {
    // Random walk with slight upward bias
    const change = (Math.random() - 0.48) * 200;
    price = price + change;
    prices.push(Math.round(price * 100) / 100);
  }
  
  return NextResponse.json({ 
    prices,
    note: 'Using generated data - external APIs blocked on server'
  });
}
