import { NextResponse } from 'next/server'

// In-memory store for demo (replace with Prisma/DB later)
const markets = new Map([
  ['1', { id: '1', question: 'Will Bitcoin reach $150,000 by December 2026?', yesPrice: 0.35, noPrice: 0.65, volume: 125000 }],
  ['2', { id: '2', question: 'Will ETH flip BTC by 2027?', yesPrice: 0.18, noPrice: 0.82, volume: 89000 }],
  ['3', { id: '3', question: 'Will SOL reach $500 by Q2 2026?', yesPrice: 0.62, noPrice: 0.38, volume: 56000 }],
  ['4', { id: '4', question: 'Will BTC be above $100k in 24h?', yesPrice: 0.71, noPrice: 0.29, volume: 234000 }],
])

// GET /api/markets - List all markets
export async function GET() {
  return NextResponse.json(Array.from(markets.values()))
}

// POST /api/markets - Place a bet
export async function POST(request: Request) {
  const body = await request.json()
  const { marketId, side, amount, userId } = body
  
  const market = markets.get(marketId)
  if (!market) {
    return NextResponse.json({ error: 'Market not found' }, { status: 404 })
  }
  
  const price = side === 'yes' ? market.yesPrice : market.noPrice
  const tokens = amount / price // Calculate tokens bought
  
  // Update market price based on trading (simplified AMM)
  const newVolume = market.volume + amount
  const priceShift = amount / (newVolume + 1000) * 0.1 // Price impact
  
  if (side === 'yes') {
    market.yesPrice = Math.min(0.95, market.yesPrice + priceShift)
    market.noPrice = 1 - market.yesPrice
  } else {
    market.noPrice = Math.min(0.95, market.noPrice + priceShift)
    market.yesPrice = 1 - market.noPrice
  }
  market.volume = newVolume
  
  return NextResponse.json({
    success: true,
    tokens,
    price,
    newPrice: side === 'yes' ? market.yesPrice : market.noPrice
  })
}
