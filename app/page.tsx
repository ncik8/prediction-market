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
    <div style={{ background: '#000', minHeight: '100vh', color: 'white', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Animated background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at top right, #1a0a2e 0%, #0a0a0a 40%, #000 100%)',
        zIndex: -1
      }} />
      
      {/* Header */}
      <header style={{ 
        padding: '24px 48px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(20px)',
        position: 'sticky',
        top: 0,
        background: 'rgba(0,0,0,0.7)'
      }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: '900', 
          letterSpacing: '-1px',
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #8b5cf6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontStyle: 'italic'
        }}>
          PREDICTX
        </h1>
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <Link href="/btc-live.html" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500', fontSize: '15px', opacity: 0.9 }}>Markets</Link>
          <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500', fontSize: '15px', opacity: 0.6 }}>How it Works</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500', fontSize: '15px', opacity: 0.6 }}>FAQ</a>
          <Link href="/btc-live.html" style={{ 
            background: 'linear-gradient(135deg, #f093fb 0%, #8b5cf6 100%)', 
            padding: '12px 32px', 
            borderRadius: '30px', 
            color: 'white', 
            textDecoration: 'none', 
            fontWeight: '700',
            fontSize: '14px',
            boxShadow: '0 10px 40px rgba(139, 92, 246, 0.4)'
          }}>
            START TRADING
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section style={{ 
        padding: '140px 48px', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glow */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ 
            display: 'inline-block',
            background: 'rgba(139, 92, 246, 0.2)',
            border: '1px solid rgba(139, 92, 246, 0.4)',
            padding: '10px 24px',
            borderRadius: '30px',
            fontSize: '13px',
            fontWeight: '600',
            color: '#c4b5fd',
            marginBottom: '32px',
            letterSpacing: '1px'
          }}>
            ⚡ PAPER TRADING PLATFORM
          </div>
          
          <h2 style={{ 
            fontSize: 'clamp(52px, 9vw, 90px)', 
            fontWeight: '950', 
            marginBottom: '28px', 
            lineHeight: '1',
            letterSpacing: '-3px',
            fontStyle: 'italic'
          }}>
            TRADE THE<br/>
            <span style={{ 
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #f97316 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              FUTURE
            </span>
          </h2>
          
          <p style={{ 
            fontSize: '22px', 
            color: '#9ca3af', 
            maxWidth: '540px', 
            margin: '0 auto 56px',
            lineHeight: '1.7',
            fontWeight: '400'
          }}>
            Predict on crypto, sports & world events. Start with <span style={{ color: '#f093fb', fontWeight: '700' }}>$10,000</span> in demo funds.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/btc-live.html" style={{ 
              background: 'linear-gradient(135deg, #f093fb 0%, #8b5cf6 100%)',
              padding: '20px 56px', 
              borderRadius: '30px', 
              color: 'white', 
              textDecoration: 'none', 
              fontSize: '17px', 
              fontWeight: '800',
              letterSpacing: '1px',
              boxShadow: '0 20px 60px rgba(139, 92, 246, 0.5)'
            }}>
              START TRADING →
            </Link>
            <button style={{ 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid rgba(255,255,255,0.15)', 
              padding: '20px 44px', 
              borderRadius: '30px', 
              color: 'white', 
              fontSize: '17px',
              fontWeight: '600'
            }}>
              EXPLORE MARKETS
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '48px', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '48px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', fontWeight: '950', letterSpacing: '-2px', background: 'linear-gradient(135deg, #f093fb, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>$2.4M</div>
            <div style={{ color: '#6b7280', fontSize: '14px', fontWeight: '600', marginTop: '6px', letterSpacing: '1px' }}>TOTAL VOLUME</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', fontWeight: '950', letterSpacing: '-2px', background: 'linear-gradient(135deg, #f093fb, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>12.5K</div>
            <div style={{ color: '#6b7280', fontSize: '14px', fontWeight: '600', marginTop: '6px', letterSpacing: '1px' }}>ACTIVE TRADERS</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', fontWeight: '950', letterSpacing: '-2px', background: 'linear-gradient(135deg, #f093fb, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>99.9%</div>
            <div style={{ color: '#6b7280', fontSize: '14px', fontWeight: '600', marginTop: '6px', letterSpacing: '1px' }}>UPTIME</div>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section style={{ padding: '100px 48px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
          <h3 style={{ fontSize: '36px', fontWeight: '950', letterSpacing: '-1px' }}>
            🔥 TRENDING
          </h3>
          <Link href="/btc-live.html" style={{ color: '#c4b5fd', textDecoration: 'none', fontWeight: '600', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            View All <span style={{ fontSize: '18px' }}>→</span>
          </Link>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {markets.map(m => (
            <div key={m.id} style={{ 
              background: 'linear-gradient(180deg, rgba(30,20,50,0.8) 0%, rgba(15,10,30,0.9) 100%)', 
              padding: '32px', 
              borderRadius: '24px', 
              border: '1px solid rgba(139, 92, 246, 0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 30px 60px rgba(139, 92, 246, 0.3)'
              e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)'
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)'
            }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
                <span style={{ 
                  background: 'linear-gradient(135deg, #f093fb 0%, #8b5cf6 100%)', 
                  padding: '8px 18px', 
                  borderRadius: '24px', 
                  fontSize: '13px', 
                  fontWeight: '900',
                  letterSpacing: '0.5px'
                }}>{m.asset}</span>
                <span style={{ color: '#6b7280', fontSize: '14px' }}>📊 {m.volume}</span>
              </div>
              <p style={{ fontSize: '17px', marginBottom: '28px', lineHeight: '1.5', fontWeight: '500' }}>{m.question}</p>
              <div style={{ display: 'flex', gap: '14px' }}>
                <div style={{ flex: 1, background: 'rgba(16, 185, 129, 0.15)', padding: '16px', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <div style={{ fontSize: '11px', color: '#34d399', fontWeight: '700', letterSpacing: '1px' }}>YES</div>
                  <div style={{ fontSize: '26px', fontWeight: '950', color: '#10b981' }}>{m.yesPrice}%</div>
                </div>
                <div style={{ flex: 1, background: 'rgba(239, 68, 68, 0.15)', padding: '16px', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                  <div style={{ fontSize: '11px', color: '#f87171', fontWeight: '700', letterSpacing: '1px' }}>NO</div>
                  <div style={{ fontSize: '26px', fontWeight: '950', color: '#ef4444' }}>{m.noPrice}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '100px 48px', background: 'linear-gradient(180deg, transparent 0%, rgba(20,10,40,0.5) 100%)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '36px', fontWeight: '950', letterSpacing: '-1px', textAlign: 'center', marginBottom: '72px' }}>
            WHY PREDICTX?
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px' }}>
            {[
              { icon: '💰', title: '$10,000 Demo', desc: 'Practice with virtual funds before risking real money' },
              { icon: '⚡', title: 'Lightning Fast', desc: 'Real-time prices and instant trade execution' },
              { icon: '🔒', title: 'Secure & Transparent', desc: 'All trades verified. Complete transparency' },
              { icon: '🌍', title: 'Global Access', desc: 'Trade from anywhere in the world' }
            ].map((f, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '24px' }}>
                <div style={{ fontSize: '56px', marginBottom: '20px' }}>{f.icon}</div>
                <h4 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '12px' }}>{f.title}</h4>
                <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: '1.6' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '120px 48px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '56px', fontWeight: '950', letterSpacing: '-2px', marginBottom: '20px' }}>
          READY TO TRADE?
        </h2>
        <p style={{ color: '#9ca3af', marginBottom: '48px', fontSize: '20px' }}>
          Join thousands predicting the future
        </p>
        <Link href="/btc-live.html" style={{ 
          background: 'linear-gradient(135deg, #f093fb 0%, #8b5cf6 100%)',
          padding: '24px 72px', 
          borderRadius: '30px', 
          color: 'white', 
          textDecoration: 'none', 
          fontSize: '20px', 
          fontWeight: '800',
          letterSpacing: '1px',
          display: 'inline-block',
          boxShadow: '0 30px 80px rgba(139, 92, 246, 0.6)'
        }}>
          GET STARTED →
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ padding: '48px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', color: '#4b5563', fontSize: '14px' }}>
        <p style={{ fontWeight: '700', letterSpacing: '3px', marginBottom: '12px' }}>© 2026 PREDICTX</p>
        <p>All rights reserved. This is a demo platform for paper trading.</p>
      </footer>
    </div>
  )
}
