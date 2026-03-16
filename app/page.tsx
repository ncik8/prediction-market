'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown, Clock, DollarSign, BarChart3, Shield, Zap, ChevronRight, Users, Globe, Lock } from 'lucide-react'
import Link from 'next/link'

// Mock markets
const markets = [
  { id: '1', question: 'Will Bitcoin reach $150,000 by December 2026?', asset: 'BTC', yesPrice: 0.35, noPrice: 0.65, volume: '$125K' },
  { id: '2', question: 'Will ETH flip BTC market cap by 2027?', asset: 'ETH', yesPrice: 0.18, noPrice: 0.82, volume: '$89K' },
  { id: '3', question: 'Will SOL reach $500 by Q2 2026?', asset: 'SOL', yesPrice: 0.62, noPrice: 0.38, volume: '$56K' },
  { id: '4', question: 'Will Bitcoin be above $100,000 in 24 hours?', asset: 'BTC', yesPrice: 0.71, noPrice: 0.29, volume: '$234K' },
]

export default function Home() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      {/* Header */}
      <header style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1f2937' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          PredictX
        </h1>
        <nav style={{ display: 'flex', gap: '30px' }}>
          <Link href="/btc-live.html" style={{ color: '#94a3b8', textDecoration: 'none' }}>Markets</Link>
          <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>How it Works</a>
          <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>FAQ</a>
        </nav>
        <Link href="/btc-live.html" style={{ background: '#3b82f6', padding: '10px 24px', borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
          Start Trading
        </Link>
      </header>

      {/* Hero */}
      <section style={{ padding: '80px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '56px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.1' }}>
          Trade the Future
        </h2>
        <p style={{ fontSize: '20px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 40px' }}>
          Predict on crypto prices, sports, and world events. Start with $10,000 in demo funds.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <Link href="/btc-live.html" style={{ background: '#3b82f6', padding: '16px 32px', borderRadius: '12px', color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}>
            Start Trading
          </Link>
          <button style={{ background: 'transparent', border: '1px solid #374151', padding: '16px 32px', borderRadius: '12px', color: 'white', fontSize: '18px' }}>
            Learn More
          </button>
        </div>
      </section>

      {/* Markets */}
      <section style={{ padding: '40px' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>🔥 Trending Markets</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {markets.map(m => (
            <div key={m.id} style={{ background: '#1f2937', padding: '24px', borderRadius: '16px', border: '1px solid #374151' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ background: '#3b82f6', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>{m.asset}</span>
                <span style={{ color: '#6b7280', fontSize: '14px' }}>Volume: {m.volume}</span>
              </div>
              <p style={{ fontSize: '16px', marginBottom: '20px', lineHeight: '1.4' }}>{m.question}</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ flex: 1, background: '#065f46', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', color: '#6ee7b7' }}>YES</div>
                  <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#34d399' }}>{(m.yesPrice * 100).toFixed(0)}%</div>
                </div>
                <div style={{ flex: 1, background: '#7f1d1d', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', color: '#fca5a5' }}>NO</div>
                  <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#f87171' }}>{(m.noPrice * 100).toFixed(0)}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '60px 40px', background: '#111827' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '40px', textAlign: 'center' }}>Why PredictX?</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', background: '#3b82f6', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <DollarSign size={28} />
            </div>
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>$10,000 Demo</h4>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>Practice with virtual money before risking real funds</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', background: '#8b5cf6', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Zap size={28} />
            </div>
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Instant Trading</h4>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>Lightning fast trades with real-time prices</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', background: '#10b981', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Shield size={28} />
            </div>
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Secure & Transparent</h4>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>All trades verified on blockchain</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px' }}>Ready to Start?</h2>
        <p style={{ color: '#9ca3af', marginBottom: '30px' }}>Join thousands of traders predicting the future</p>
        <Link href="/btc-live.html" style={{ background: '#3b82f6', padding: '16px 40px', borderRadius: '12px', color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold', display: 'inline-block' }}>
          Start Trading Now
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ padding: '30px', borderTop: '1px solid #1f2937', textAlign: 'center', color: '#6b7280', fontSize: '14px' }}>
        <p>© 2026 PredictX. All rights reserved.</p>
      </footer>
    </div>
  )
}
