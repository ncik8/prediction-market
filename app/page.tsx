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
    <div style={{ background: '#050505', minHeight: '100vh', color: '#ececec', fontFamily: 'Inter, -apple-system, sans-serif' }}>
      
      {/* Background Image */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(/public.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.95,
        zIndex: 0
      }} />
      
      {/* Dark overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(10,5,20,0.6) 100%)',
        zIndex: 1
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <header style={{ 
          padding: '0 48px', 
          height: '72px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(20px)',
          zIndex: 100
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '56px' }}>
            <h1 style={{ 
              fontSize: '22px', 
              fontWeight: '800', 
              color: '#fff',
              letterSpacing: '-0.5px'
            }}>
              PREDICTX
            </h1>
            <nav style={{ display: 'flex', gap: '32px' }}>
              <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Markets</a>
              <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Products</a>
              <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Community</a>
            </nav>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{ background: 'transparent', border: 'none', color: '#888', padding: '12px 24px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>
              Sign In
            </button>
            <Link href="/btc-live.html" style={{ background: '#2962ff', border: 'none', color: '#fff', padding: '12px 24px', borderRadius: '4px', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
              Get Started
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section style={{ padding: '200px 48px 140px', maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: 'clamp(48px, 8vw, 80px)', 
            fontWeight: '900', 
            marginBottom: '32px', 
            color: '#fff',
            letterSpacing: '-2px',
            lineHeight: '1.05'
          }}>
            Train Hard <span style={{ color: '#6366f1' }}>/ Trade Easy</span>
          </h2>
          
          <p style={{ 
            fontSize: '20px', 
            color: '#fff', 
            maxWidth: '540px', 
            margin: '0 auto 48px',
            lineHeight: '1.7'
          }}>
            Run your strategies through realistic simulations, thousands of runs, and live-like conditions—without risking a cent. Here is where winning bots get built, broken, and rebuilt for predictive market traders.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link href="/btc-live.html" style={{ 
              background: '#fff', 
              padding: '18px 40px', 
              borderRadius: '6px', 
              color: '#000', 
              textDecoration: 'none', 
              fontSize: '16px', 
              fontWeight: '700'
            }}>
              Start Trading
            </Link>
            <button style={{ 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid rgba(255,255,255,0.15)', 
              padding: '18px 40px', 
              borderRadius: '6px', 
              color: '#aaa', 
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Explore Markets
            </button>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: '48px', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '48px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', fontWeight: '800', color: '#fff' }}>$2.4M</div>
              <div style={{ color: '#666', fontSize: '13px', fontWeight: '500', marginTop: '4px', letterSpacing: '1px' }}>TOTAL VOLUME</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', fontWeight: '800', color: '#fff' }}>12.5K</div>
              <div style={{ color: '#666', fontSize: '13px', fontWeight: '500', marginTop: '4px', letterSpacing: '1px' }}>ACTIVE TRADERS</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', fontWeight: '800', color: '#fff' }}>99.9%</div>
              <div style={{ color: '#666', fontSize: '13px', fontWeight: '500', marginTop: '4px', letterSpacing: '1px' }}>UPTIME</div>
            </div>
          </div>
        </section>

        {/* Markets */}
        <section style={{ padding: '80px 48px', maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#6366f1', marginBottom: '24px', letterSpacing: '1.5px' }}>
            TRENDING MARKETS
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {markets.map(m => (
              <div key={m.id} style={{ 
                background: 'rgba(20,20,30,0.8)', 
                padding: '24px', 
                borderRadius: '12px', 
                border: '1px solid rgba(99,102,241,0.2)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.2)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ background: 'rgba(99,102,241,0.2)', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '700', color: '#a5b4fc' }}>{m.asset}</span>
                  <span style={{ color: '#555', fontSize: '12px' }}>{m.volume}</span>
                </div>
                <p style={{ fontSize: '15px', marginBottom: '20px', lineHeight: '1.5', color: '#ccc' }}>{m.question}</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ flex: 1, background: 'rgba(34,197,94,0.12)', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '10px', color: '#22c55e', fontWeight: '600', letterSpacing: '0.5px' }}>YES</div>
                    <div style={{ fontSize: '20px', fontWeight: '800', color: '#22c55e' }}>{m.yesPrice}%</div>
                  </div>
                  <div style={{ flex: 1, background: 'rgba(239,68,68,0.12)', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '10px', color: '#ef4444', fontWeight: '600', letterSpacing: '0.5px' }}>NO</div>
                    <div style={{ fontSize: '20px', fontWeight: '800', color: '#ef4444' }}>{m.noPrice}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section style={{ padding: '80px 48px', background: 'rgba(0,0,0,0.4)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px' }}>
              {[
                { icon: '⚡', title: 'Lightning Fast', desc: 'Real-time prices and instant execution' },
                { icon: '🎯', title: 'Precise Predictions', desc: 'Advanced tools for better decisions' },
                { icon: '🔒', title: 'Secure Platform', desc: 'Your data and funds are protected' },
                { icon: '🌍', title: 'Global Markets', desc: 'Trade crypto, sports, and more' },
              ].map((f, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '36px', marginBottom: '16px' }}>{f.icon}</div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>{f.title}</h4>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ padding: '40px', borderTop: '1px solid rgba(255,255,255,0.08)', textAlign: 'center', color: '#444', fontSize: '13px' }}>
          <p>© 2026 PredictX. Paper trading platform.</p>
        </footer>
      </div>
    </div>
  )
}
