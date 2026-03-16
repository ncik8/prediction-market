'use client'

import { useState, useEffect } from 'react'
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
    <div style={{ background: '#000', minHeight: '100vh', color: 'white', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Animated gradient background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at top, #1a1a2e 0%, #000 50%)',
        zIndex: -1
      }} />
      
      {/* Header */}
      <header style={{ 
        padding: '24px 48px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        background: 'rgba(0,0,0,0.5)'
      }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: '900', 
          letterSpacing: '-1px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontStyle: 'italic'
        }}>
          PREDICTX
        </h1>
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <Link href="/btc-live.html" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500', fontSize: '15px', opacity: 0.8 }}>Markets</Link>
          <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500', fontSize: '15px', opacity: 0.8 }}>How it Works</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500', fontSize: '15px', opacity: 0.8 }}>FAQ</a>
          <Link href="/btc-live.html" style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            padding: '12px 28px', 
            borderRadius: '30px', 
            color: 'white', 
            textDecoration: 'none', 
            fontWeight: '700',
            fontSize: '14px',
            letterSpacing: '0.5px'
          }}>
            START TRADING
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section style={{ 
        padding: '120px 48px', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glow effect */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(102,126,234,0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ 
            display: 'inline-block',
            background: 'rgba(102,126,234,0.2)',
            border: '1px solid rgba(102,126,234,0.3)',
            padding: '8px 20px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: '600',
            color: '#a5b4fc',
            marginBottom: '24px',
            letterSpacing: '1px'
          }}>
            ⚡ PAPER TRADING PLATFORM
          </div>
          
          <h2 style={{ 
            fontSize: 'clamp(48px, 8vw, 80px)', 
            fontWeight: '900', 
            marginBottom: '24px', 
            lineHeight: '1.05',
            letterSpacing: '-2px',
            fontStyle: 'italic'
          }}>
            TRADE THE<br/>
            <span style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #f093fb 50%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              FUTURE
            </span>
          </h2>
          
          <p style={{ 
            fontSize: '20px', 
            color: '#9ca3af', 
            maxWidth: '520px', 
            margin: '0 auto 48px',
            lineHeight: '1.6',
            fontWeight: '400'
          }}>
            Predict on crypto, sports & world events. Start with <span style={{ color: '#f093fb', fontWeight: '700' }}>$10,000</span> in demo funds. Zero risk.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/btc-live.html" style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: '18px 48px', 
              borderRadius: '30px', 
              color: 'white', 
              textDecoration: 'none', 
              fontSize: '16px', 
              fontWeight: '700',
              letterSpacing: '1px',
              boxShadow: '0 10px 40px rgba(102,126,234,0.4)'
            }}>
              START TRADING →
            </Link>
            <button style={{ 
              background: 'transparent', 
              border: '1px solid rgba(255,255,255,0.2)', 
              padding: '18px 36px', 
              borderRadius: '30px', 
              color: 'white', 
              fontSize: '16px',
              fontWeight: '600'
            }}>
              VIEW MARKETS
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '40px 48px', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '40px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '42px', fontWeight: '900', letterSpacing: '-1px' }}>$2.4M</div>
            <div style={{ color: '#6b7280', fontSize: '14px', fontWeight: '500', marginTop: '4px' }}>TOTAL VOLUME</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '42px', fontWeight: '900', letterSpacing: '-1px' }}>12.5K</div>
            <div style={{ color: '#6b7280', fontSize: '14px', fontWeight: '500', marginTop: '4px' }}>ACTIVE TRADERS</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '42px', fontWeight: '900', letterSpacing: '-1px' }}>98.2%</div>
            <div style={{ color: '#6b7280', fontSize: '14px', fontWeight: '500', marginTop: '4px' }}>UPTIME</div>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section style={{ padding: '80px 48px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-1px' }}>
            🔥 TRENDING
          </h3>
          <Link href="/btc-live.html" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
            View All <span>→</span>
          </Link>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {markets.map(m => (
            <div key={m.id} style={{ 
              background: 'linear-gradient(180deg, rgba(30,30,50,0.8) 0%, rgba(20,20,35,0.8) 100%)', 
              padding: '28px', 
              borderRadius: '20px', 
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'transform 0.2s',
              cursor: 'pointer'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'center' }}>
                <span style={{ 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                  padding: '6px 14px', 
                  borderRadius: '20px', 
                  fontSize: '12px', 
                  fontWeight: '800' 
                }}>{m.asset}</span>
                <span style={{ color: '#6b7280', fontSize: '13px' }}>📊 {m.volume}</span>
              </div>
              <p style={{ fontSize: '16px', marginBottom: '24px', lineHeight: '1.5', fontWeight: '500' }}>{m.question}</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ flex: 1, background: 'rgba(16,185,129,0.15)', padding: '14px', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(16,185,129,0.3)' }}>
                  <div style={{ fontSize: '11px', color: '#34d399', fontWeight: '700', letterSpacing: '1px' }}>YES</div>
                  <div style={{ fontSize: '22px', fontWeight: '900', color: '#10b981' }}>{(m.yesPrice * 100).toFixed(0)}%</div>
                </div>
                <div style={{ flex: 1, background: 'rgba(239,68,68,0.15)', padding: '14px', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(239,68,68,0.3)' }}>
                  <div style={{ fontSize: '11px', color: '#f87171', fontWeight: '700', letterSpacing: '1px' }}>NO</div>
                  <div style={{ fontSize: '22px', fontWeight: '900', color: '#ef4444' }}>{(m.noPrice * 100).toFixed(0)}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 48px', background: 'linear-gradient(180deg, transparent 0%, rgba(20,20,40,0.5) 100%)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-1px', textAlign: 'center', marginBottom: '60px' }}>
            WHY PREDICTX?
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            {[
              { icon: '💰', title: '$10,000 Demo', desc: 'Practice with virtual funds before risking real money' },
              { icon: '⚡', title: 'Lightning Fast', desc: 'Real-time prices and instant trade execution' },
              { icon: '🔒', title: 'Secure & Transparent', desc: 'All trades verified. Complete transparency' },
              { icon: '🌍', title: 'Global Access', desc: 'Trade from anywhere in the world' }
            ].map((f, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{f.icon}</div>
                <h4 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>{f.title}</h4>
                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.5' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 48px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '48px', fontWeight: '900', letterSpacing: '-2px', marginBottom: '16px' }}>
          READY TO TRADE?
        </h2>
        <p style={{ color: '#9ca3af', marginBottom: '40px', fontSize: '18px' }}>
          Join thousands predicting the future
        </p>
        <Link href="/btc-live.html" style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '20px 60px', 
          borderRadius: '30px', 
          color: 'white', 
          textDecoration: 'none', 
          fontSize: '18px', 
          fontWeight: '700',
          letterSpacing: '1px',
          display: 'inline-block',
          boxShadow: '0 20px 60px rgba(102,126,234,0.5)'
        }}>
          GET STARTED →
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', color: '#4b5563', fontSize: '14px' }}>
        <p style={{ fontWeight: '600', letterSpacing: '2px', marginBottom: '8px' }}>© 2026 PREDICTX</p>
        <p>All rights reserved. This is a demo platform for paper trading.</p>
      </footer>
    </div>
  )
}
