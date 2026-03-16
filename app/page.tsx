'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const markets = [
  { id: '1', question: 'Will BTC reach $150K by Dec 2026?', asset: 'BTC', yesPrice: 35, noPrice: 65, volume: '$125K' },
  { id: '2', question: 'Will ETH flip BTC by 2027?', asset: 'ETH', yesPrice: 18, noPrice: 82, volume: '$89K' },
  { id: '3', question: 'Will SOL reach $500 by Q2 2026?', asset: 'SOL', yesPrice: 62, noPrice: 38, volume: '$56K' },
  { id: '4', question: 'Will BTC hit $100K in 24h?', asset: 'BTC', yesPrice: 71, noPrice: 29, volume: '$234K' },
]

export default function Home() {
  return (
    <div style={{ background: '#0d0d0d', minHeight: '100vh', color: '#ececec', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif' }}>
      
      {/* Header */}
      <header style={{ 
        padding: '0 40px', 
        height: '64px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        borderBottom: '1px solid #1f1f1f',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(13,13,13,0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
          <h1 style={{ 
            fontSize: '20px', 
            fontWeight: '700', 
            color: '#fff',
            letterSpacing: '-0.5px'
          }}>
            PREDICTX
          </h1>
          <nav style={{ display: 'flex', gap: '28px' }}>
            <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Markets</a>
            <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Products</a>
            <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Community</a>
          </nav>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{ background: 'transparent', border: 'none', color: '#888', padding: '10px 20px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>
            Sign In
          </button>
          <Link href="/btc-live.html" style={{ background: '#2962ff', border: 'none', color: '#fff', padding: '10px 20px', borderRadius: '4px', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: '180px 40px 120px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ 
          fontSize: 'clamp(40px, 7vw, 64px)', 
          fontWeight: '800', 
          marginBottom: '24px', 
          color: '#fff',
          letterSpacing: '-1.5px',
          lineHeight: '1.1'
        }}>
          Look first.<br/>Then leap.
        </h2>
        
        <p style={{ 
          fontSize: '18px', 
          color: '#888', 
          maxWidth: '500px', 
          margin: '0 auto 40px',
          lineHeight: '1.6'
        }}>
          The prediction market for everyone. Trade on crypto, sports, and world events with $10,000 in demo funds.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link href="/btc-live.html" style={{ 
            background: '#fff', 
            padding: '14px 32px', 
            borderRadius: '4px', 
            color: '#000', 
            textDecoration: 'none', 
            fontSize: '15px', 
            fontWeight: '600'
          }}>
            Get Started Free
          </Link>
          <button style={{ 
            background: 'transparent', 
            border: '1px solid #333', 
            padding: '14px 32px', 
            borderRadius: '4px', 
            color: '#888', 
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            View Markets
          </button>
        </div>
      </section>

      {/* Markets */}
      <section style={{ padding: '0 40px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#666', marginBottom: '20px', letterSpacing: '1px' }}>
          TRENDING MARKETS
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {markets.map(m => (
            <div key={m.id} style={{ 
              background: '#161616', 
              padding: '20px', 
              borderRadius: '8px', 
              border: '1px solid #222',
              cursor: 'pointer'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={{ background: '#222', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: '700', color: '#fff' }}>{m.asset}</span>
                <span style={{ color: '#555', fontSize: '12px' }}>{m.volume}</span>
              </div>
              <p style={{ fontSize: '14px', marginBottom: '16px', lineHeight: '1.5', color: '#ccc' }}>{m.question}</p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ flex: 1, background: '#0f2118', padding: '10px', borderRadius: '4px', textAlign: 'center' }}>
                  <div style={{ fontSize: '10px', color: '#22c55e', fontWeight: '600', letterSpacing: '0.5px' }}>YES</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#22c55e' }}>{m.yesPrice}%</div>
                </div>
                <div style={{ flex: 1, background: '#210f0f', padding: '10px', borderRadius: '4px', textAlign: 'center' }}>
                  <div style={{ fontSize: '10px', color: '#ef4444', fontWeight: '600', letterSpacing: '0.5px' }}>NO</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#ef4444' }}>{m.noPrice}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 40px', background: '#0a0a0a', borderTop: '1px solid #1f1f1f' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px' }}>
            {[
              { title: 'Real-Time Data', desc: 'Live prices from major exchanges' },
              { title: 'Instant Execution', desc: 'Lightning fast trade fills' },
              { title: '$10,000 Demo', desc: 'Practice with virtual funds' },
              { title: 'Global Access', desc: 'Trade from anywhere' },
            ].map((f, i) => (
              <div key={i}>
                <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#fff', marginBottom: '8px' }}>{f.title}</h4>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px', borderTop: '1px solid #1f1f1f', textAlign: 'center', color: '#444', fontSize: '13px' }}>
        <p>© 2026 PredictX. Paper trading only.</p>
      </footer>
    </div>
  )
}
