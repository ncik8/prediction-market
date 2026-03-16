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
    <div style={{ background: '#131722', minHeight: '100vh', color: '#d1d4dc', fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>
      {/* Header - TradingView style */}
      <header style={{ 
        background: '#1e222d', 
        padding: '0 24px', 
        height: '56px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        borderBottom: '1px solid #2a2e39'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <h1 style={{ 
            fontSize: '22px', 
            fontWeight: '700', 
            color: '#2962ff',
            letterSpacing: '-0.5px'
          }}>
            predict<span style={{ color: '#fff' }}>x</span>
          </h1>
          <nav style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: '#787b86', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Markets</a>
            <a href="#" style={{ color: '#787b86', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Products</a>
            <a href="#" style={{ color: '#787b86', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Community</a>
          </nav>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button style={{ background: 'transparent', border: '1px solid #2a2e39', color: '#787b86', padding: '8px 20px', borderRadius: '4px', fontSize: '14px', fontWeight: '600' }}>
            Sign In
          </button>
          <Link href="/btc-live.html" style={{ background: '#2962ff', border: 'none', color: '#fff', padding: '8px 20px', borderRadius: '4px', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: '80px 24px', textAlign: 'center', background: 'linear-gradient(180deg, #131722 0%, #1e222d 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ 
            display: 'inline-block',
            background: 'rgba(41, 98, 255, 0.15)',
            border: '1px solid rgba(41, 98, 255, 0.3)',
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: '600',
            color: '#2962ff',
            marginBottom: '24px',
            letterSpacing: '1px'
          }}>
            📈 PAPER TRADING PLATFORM
          </div>
          
          <h2 style={{ 
            fontSize: 'clamp(36px, 6vw, 56px)', 
            fontWeight: '800', 
            marginBottom: '20px', 
            color: '#fff',
            letterSpacing: '-1px'
          }}>
            Predict. Trade. <span style={{ color: '#2962ff' }}>Profit.</span>
          </h2>
          
          <p style={{ 
            fontSize: '18px', 
            color: '#787b86', 
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Trade predictions on crypto, sports & world events.<br/>
            Start with <span style={{ color: '#21a366', fontWeight: '700' }}>$10,000</span> demo funds. Zero risk.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/btc-live.html" style={{ 
              background: '#2962ff', 
              padding: '14px 36px', 
              borderRadius: '4px', 
              color: '#fff', 
              textDecoration: 'none', 
              fontSize: '15px', 
              fontWeight: '700',
              letterSpacing: '0.5px'
            }}>
              START TRADING
            </Link>
            <button style={{ 
              background: 'transparent', 
              border: '1px solid #2a2e39', 
              padding: '14px 36px', 
              borderRadius: '4px', 
              color: '#787b86', 
              fontSize: '15px',
              fontWeight: '600'
            }}>
              EXPLORE MARKETS
            </button>
          </div>
        </div>
      </section>

      {/* Markets - TradingView style */}
      <section style={{ padding: '24px', background: '#131722' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '700', 
            color: '#fff',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span style={{ color: '#f0b90b' }}>★</span> TRENDING MARKETS
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '12px' 
          }}>
            {markets.map(m => (
              <div key={m.id} style={{ 
                background: '#1e222d', 
                padding: '16px', 
                borderRadius: '4px', 
                border: '1px solid #2a2e39',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = '#2962ff'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = '#2a2e39'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ 
                    background: '#2962ff', 
                    padding: '4px 10px', 
                    borderRadius: '3px', 
                    fontSize: '12px', 
                    fontWeight: '700',
                    color: '#fff'
                  }}>{m.asset}</span>
                  <span style={{ color: '#787b86', fontSize: '12px' }}>{m.volume}</span>
                </div>
                <p style={{ fontSize: '14px', marginBottom: '16px', lineHeight: '1.4', color: '#d1d4dc', fontWeight: '500' }}>{m.question}</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ 
                    flex: 1, 
                    background: 'rgba(33, 163, 102, 0.15)', 
                    padding: '10px', 
                    borderRadius: '3px', 
                    textAlign: 'center',
                    border: '1px solid rgba(33, 163, 102, 0.3)'
                  }}>
                    <div style={{ fontSize: '10px', color: '#21a366', fontWeight: '600', letterSpacing: '0.5px' }}>YES</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#21a366' }}>{m.yesPrice}%</div>
                  </div>
                  <div style={{ 
                    flex: 1, 
                    background: 'rgba(239, 68, 68, 0.15)', 
                    padding: '10px', 
                    borderRadius: '3px', 
                    textAlign: 'center',
                    border: '1px solid rgba(239, 68, 68, 0.3)'
                  }}>
                    <div style={{ fontSize: '10px', color: '#ef4444', fontWeight: '600', letterSpacing: '0.5px' }}>NO</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#ef4444' }}>{m.noPrice}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '60px 24px', background: '#1e222d' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
            {[
              { num: '01', title: 'Real-Time Data', desc: 'Live prices from major exchanges' },
              { num: '02', title: 'Instant Execution', desc: 'Lightning fast trade fills' },
              { num: '03', title: 'Demo Account', desc: '$10,000 virtual funds to practice' },
              { num: '04', title: 'Multiple Assets', desc: 'Crypto, sports, politics & more' },
            ].map((f, i) => (
              <div key={i}>
                <div style={{ fontSize: '12px', color: '#2962ff', fontWeight: '700', marginBottom: '8px' }}>{f.num}</div>
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>{f.title}</h4>
                <p style={{ fontSize: '14px', color: '#787b86', lineHeight: '1.5' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center', background: '#131722' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>
          START PREDICTING TODAY
        </h2>
        <p style={{ color: '#787b86', marginBottom: '32px', fontSize: '16px' }}>
          Join thousands of traders on PredictX
        </p>
        <Link href="/btc-live.html" style={{ 
          background: '#2962ff', 
          padding: '16px 48px', 
          borderRadius: '4px', 
          color: '#fff', 
          textDecoration: 'none', 
          fontSize: '16px', 
          fontWeight: '700',
          display: 'inline-block'
        }}>
          GET STARTED FREE →
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ padding: '24px', borderTop: '1px solid #2a2e39', textAlign: 'center', color: '#565a69', fontSize: '12px' }}>
        <p>© 2026 PredictX. All rights reserved. Paper trading only — no real money involved.</p>
      </footer>
    </div>
  )
}
