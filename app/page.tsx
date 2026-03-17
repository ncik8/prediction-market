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
  const [width, setWidth] = useState(1200)
  const [menuOpen, setMenuOpen] = useState(false)
  
  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => {
      setWidth(window.innerWidth)
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  const isMobile = width < 768
  
  return (
    <div style={{ background: '#050505', minHeight: '100vh', color: '#ececec', fontFamily: 'Inter, -apple-system, sans-serif', overflowX: 'hidden' }}>
      
      {/* Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/public.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.95, zIndex: 0 }} />
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(10,5,20,0.6) 100%)', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <header style={{ 
          padding: isMobile ? '0 16px' : '0 48px', 
          height: 64, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(20px)',
          zIndex: 100
        }}>
          <h1 style={{ fontSize: isMobile ? '18px' : '22px', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>PREDICTX</h1>
          
          {isMobile ? (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 24, cursor: 'pointer', padding: 8 }}>
              {menuOpen ? '✕' : '☰'}
            </button>
          ) : (
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Link href="#" style={{ color: '#888', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Markets</Link>
              <Link href="#" style={{ color: '#888', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Products</Link>
              <Link href="#" style={{ color: '#888', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Community</Link>
              <Link href="/btc-live.html" style={{ background: 'transparent', border: '1px solid #333', color: '#fff', padding: '10px 20px', borderRadius: 4, fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Sign In</Link>
              <Link href="/btc-live.html" style={{ background: '#2962ff', border: 'none', color: '#fff', padding: '10px 20px', borderRadius: 4, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Get Started</Link>
            </div>
          )}
        </header>

        {/* Mobile Menu */}
        {isMobile && menuOpen && (
          <div style={{ 
            position: 'fixed', 
            top: 64, 
            left: 0, 
            right: 0, 
            background: 'rgba(0,0,0,0.95)', 
            backdropFilter: 'blur(20px)',
            zIndex: 99,
            padding: '20px 16px',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Link href="/btc-live.html" onClick={() => setMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 500, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Markets</Link>
              <Link href="/btc-live.html" onClick={() => setMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 500, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Products</Link>
              <Link href="/btc-live.html" onClick={() => setMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 500, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Community</Link>
              <Link href="/btc-live.html?login=1" onClick={() => setMenuOpen(false)} style={{ background: '#2962ff', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 600, padding: '14px', borderRadius: 6, textAlign: 'center', marginTop: 8 }}>Get Started</Link>
            </nav>
          </div>
        )}

        {/* Hero */}
        <section style={{ padding: isMobile ? (menuOpen ? '180px 20px 60px' : '100px 20px 60px') : '160px 48px 100px', maxWidth: 1000, margin: '0 auto', textAlign: 'center', transition: 'padding 0.3s' }}>
          <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(36px, 7vw, 58px)', fontWeight: 900, marginBottom: 20, color: '#fff', letterSpacing: -1.5, lineHeight: 1.15 }}>
            Train Hard<br/><span style={{ color: '#6366f1' }}>/ Trade Easy</span>
          </h2>
          
          <p style={{ fontSize: isMobile ? '14px' : '17px', color: '#ccc', maxWidth: isMobile ? '100%' : 480, margin: '0 auto 32px', lineHeight: 1.6 }}>
            Run your strategies through realistic simulations, thousands of runs, and live-like conditions—without risking a cent.
          </p>
          
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
            <Link href="/btc-live.html?login=1" style={{ background: '#fff', padding: '14px 32px', borderRadius: 6, color: '#000', textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>Get Started Free</Link>
            <Link href="/btc-live.html?login=1" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', padding: '14px 32px', borderRadius: 6, color: '#aaa', textDecoration: 'none', fontSize: 15, fontWeight: 600, textAlign: 'center' }}>View Markets</Link>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: isMobile ? '24px 20px' : '36px', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 24 }}>
            {[
              { label: '$2.4M', sub: 'TOTAL VOLUME' },
              { label: '12.5K', sub: 'ACTIVE TRADERS' },
              { label: '99.9%', sub: 'UPTIME' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: isMobile ? '22px' : '32px', fontWeight: 800, color: '#fff' }}>{stat.label}</div>
                <div style={{ color: '#666', fontSize: 10, fontWeight: 500, marginTop: 4, letterSpacing: 1 }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Markets */}
        <section style={{ padding: isMobile ? '32px 20px' : '60px 48px', maxWidth: 1000, margin: '0 auto' }}>
          <h3 style={{ fontSize: 12, fontWeight: 600, color: '#6366f1', marginBottom: 16, letterSpacing: 1.5 }}>TRENDING MARKETS</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 12 }}>
            {markets.map(m => (
              <div key={m.id} style={{ background: 'rgba(20,20,30,0.8)', padding: 16, borderRadius: 8, border: '1px solid rgba(99,102,241,0.2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ background: 'rgba(99,102,241,0.2)', padding: '4px 10px', borderRadius: 4, fontSize: 11, fontWeight: 700, color: '#a5b4fc' }}>{m.asset}</span>
                  <span style={{ color: '#555', fontSize: 11 }}>{m.volume}</span>
                </div>
                <p style={{ fontSize: 14, marginBottom: 14, lineHeight: 1.4, color: '#ccc' }}>{m.question}</p>
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{ flex: 1, background: 'rgba(34,197,94,0.12)', padding: 10, borderRadius: 4, textAlign: 'center' }}>
                    <div style={{ fontSize: 10, color: '#22c55e', fontWeight: 600, letterSpacing: 0.5 }}>YES</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: '#22c55e' }}>{m.yesPrice}%</div>
                  </div>
                  <div style={{ flex: 1, background: 'rgba(239,68,68,0.12)', padding: 10, borderRadius: 4, textAlign: 'center' }}>
                    <div style={{ fontSize: 10, color: '#ef4444', fontWeight: 600, letterSpacing: 0.5 }}>NO</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: '#ef4444' }}>{m.noPrice}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section style={{ padding: isMobile ? '32px 20px' : '48px', background: 'rgba(0,0,0,0.4)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {[
              { title: 'Lightning Fast', desc: 'Real-time prices' },
              { title: '$10,000 Demo', desc: 'Practice free' },
              { title: 'Secure Platform', desc: 'Safe & transparent' },
              { title: 'Global Access', desc: 'Trade from anywhere' },
            ].map((f, i) => (
              <div key={i}>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 6 }}>{f.title}</h4>
                <p style={{ fontSize: 12, color: '#666', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer style={{ padding: 24, borderTop: '1px solid rgba(255,255,255,0.08)', textAlign: 'center', color: '#444', fontSize: 12 }}>
          <p>© 2026 PredictX. Training Trading Platform.</p>
        </footer>
      </div>
    </div>
  )
}
