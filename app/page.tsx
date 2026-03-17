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
  
  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  const isMobile = width < 768
  const isSmall = width < 480
  
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
          padding: isMobile ? '0 20px' : '0 48px', 
          height: isMobile ? '56px' : '72px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(20px)',
          zIndex: 100,
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '20px' : '56px' }}>
            <h1 style={{ 
              fontSize: isMobile ? '18px' : '22px', 
              fontWeight: '800', 
              color: '#fff',
              letterSpacing: '-0.5px'
            }}>
              PREDICTX
            </h1>
            {!isMobile && (
              <nav style={{ display: 'flex', gap: '32px' }}>
                <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Markets</a>
                <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Products</a>
                <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Community</a>
              </nav>
            )}
          </div>
          <div style={{ display: 'flex', gap: isMobile ? '8px' : '12px' }}>
            <Link href="/btc-live.html" style={{ 
              background: 'transparent', 
              border: '1px solid #333', 
              color: '#fff', 
              padding: isSmall ? '8px 16px' : '12px 24px', 
              borderRadius: '4px', 
              fontSize: isSmall ? '12px' : '14px', 
              fontWeight: '500', 
              textDecoration: 'none',
              whiteSpace: 'nowrap'
            }}>
              Sign In
            </Link>
            <Link href="/btc-live.html" style={{ 
              background: '#2962ff', 
              border: 'none', 
              color: '#fff', 
              padding: isSmall ? '8px 16px' : '12px 24px', 
              borderRadius: '4px', 
              fontSize: isSmall ? '12px' : '14px', 
              fontWeight: '600', 
              textDecoration: 'none',
              whiteSpace: 'nowrap'
            }}>
              Get Started
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section style={{ 
          padding: isMobile ? '120px 20px 80px' : '180px 48px 120px', 
          maxWidth: '1200px', 
          margin: '0 auto', 
          textAlign: 'center' 
        }}>
          <h2 style={{ 
            fontSize: isSmall ? '32px' : isMobile ? '40px' : 'clamp(40px, 7vw, 64px)', 
            fontWeight: '900', 
            marginBottom: isMobile ? '16px' : '24px', 
            color: '#fff',
            letterSpacing: '-1.5px',
            lineHeight: '1.1',
            padding: '0 10px'
          }}>
            Train Hard<br style={{ display: isMobile ? 'none' : 'block' }} />
            <span style={{ color: '#6366f1' }}>/ Trade Easy</span>
          </h2>
          
          <p style={{ 
            fontSize: isSmall ? '14px' : isMobile ? '16px' : '18px', 
            color: '#fff', 
            maxWidth: isMobile ? '100%' : '500px', 
            margin: '0 auto ' + (isMobile ? '24px' : '40px'),
            lineHeight: '1.6',
            padding: '0 20px'
          }}>
            Run your strategies through realistic simulations, thousands of runs, and live-like conditions—without risking a cent.
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            justifyContent: 'center', 
            flexDirection: isMobile ? 'column' : 'row',
            padding: '0 20px'
          }}>
            <Link href="/btc-live.html" style={{ 
              background: '#fff', 
              padding: isSmall ? '14px 28px' : '18px 40px', 
              borderRadius: '6px', 
              color: '#000', 
              textDecoration: 'none', 
              fontSize: isSmall ? '14px' : '16px', 
              fontWeight: '700'
            }}>
              Get Started Free
            </Link>
            <button style={{ 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid rgba(255,255,255,0.15)', 
              padding: isSmall ? '14px 28px' : '18px 40px', 
              borderRadius: '6px', 
              color: '#aaa', 
              fontSize: isSmall ? '14px' : '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              View Markets
            </button>
          </div>
        </section>

        {/* Stats */}
        <section style={{ 
          padding: isMobile ? '32px 20px' : '48px', 
          borderTop: '1px solid rgba(255,255,255,0.08)', 
          borderBottom: '1px solid rgba(255,255,255,0.08)' 
        }}>
          <div style={{ 
            maxWidth: '900px', 
            margin: '0 auto', 
            display: 'flex', 
            justifyContent: 'space-around', 
            flexWrap: 'wrap', 
            gap: isMobile ? '24px' : '48px' 
          }}>
            {[
              { label: '$2.4M', sub: 'TOTAL VOLUME' },
              { label: '12.5K', sub: 'ACTIVE TRADERS' },
              { label: '99.9%', sub: 'UPTIME' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: isMobile ? '28px' : '40px', fontWeight: '800', color: '#fff' }}>{stat.label}</div>
                <div style={{ color: '#666', fontSize: '11px', fontWeight: '500', marginTop: '4px', letterSpacing: '1px' }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Markets */}
        <section style={{ 
          padding: isMobile ? '40px 20px' : '80px 48px', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          <h3 style={{ 
            fontSize: isMobile ? '12px' : '14px', 
            fontWeight: '600', 
            color: '#6366f1', 
            marginBottom: isMobile ? '16px' : '24px', 
            letterSpacing: '1.5px' 
          }}>
            TRENDING MARKETS
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isSmall ? '1fr' : isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: isMobile ? '12px' : '16px' 
          }}>
            {markets.map(m => (
              <div key={m.id} style={{ 
                background: 'rgba(20,20,30,0.8)', 
                padding: isMobile ? '16px' : '20px', 
                borderRadius: '8px', 
                border: '1px solid rgba(99,102,241,0.2)',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ 
                    background: 'rgba(99,102,241,0.2)', 
                    padding: isSmall ? '4px 8px' : '6px 12px', 
                    borderRadius: '4px', 
                    fontSize: '11px', 
                    fontWeight: '700', 
                    color: '#a5b4fc' 
                  }}>{m.asset}</span>
                  <span style={{ color: '#555', fontSize: '11px' }}>{m.volume}</span>
                </div>
                <p style={{ 
                  fontSize: isSmall ? '13px' : '14px', 
                  marginBottom: isMobile ? '12px' : '16px', 
                  lineHeight: '1.4', 
                  color: '#ccc' 
                }}>{m.question}</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ 
                    flex: 1, 
                    background: 'rgba(34,197,94,0.12)', 
                    padding: isSmall ? '8px' : '10px', 
                    borderRadius: '4px', 
                    textAlign: 'center' 
                  }}>
                    <div style={{ fontSize: '10px', color: '#22c55e', fontWeight: '600', letterSpacing: '0.5px' }}>YES</div>
                    <div style={{ fontSize: isSmall ? '16px' : '18px', fontWeight: '700', color: '#22c55e' }}>{m.yesPrice}%</div>
                  </div>
                  <div style={{ 
                    flex: 1, 
                    background: 'rgba(239,68,68,0.12)', 
                    padding: isSmall ? '8px' : '10px', 
                    borderRadius: '4px', 
                    textAlign: 'center' 
                  }}>
                    <div style={{ fontSize: '10px', color: '#ef4444', fontWeight: '600', letterSpacing: '0.5px' }}>NO</div>
                    <div style={{ fontSize: isSmall ? '16px' : '18px', fontWeight: '700', color: '#ef4444' }}>{m.noPrice}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section style={{ 
          padding: isMobile ? '40px 20px' : '80px 48px', 
          background: 'rgba(0,0,0,0.4)', 
          borderTop: '1px solid rgba(255,255,255,0.08)' 
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isSmall ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: isMobile ? '24px' : '40px' 
            }}>
              {[
                { title: 'Lightning Fast', desc: 'Real-time prices' },
                { title: '$10,000 Demo', desc: 'Practice free' },
                { title: 'Secure Platform', desc: 'Safe & transparent' },
                { title: 'Global Access', desc: 'Trade from anywhere' },
              ].map((f, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <h4 style={{ fontSize: isMobile ? '14px' : '16px', fontWeight: '600', color: '#fff', marginBottom: '8px' }}>{f.title}</h4>
                  <p style={{ fontSize: isMobile ? '12px' : '14px', color: '#666', lineHeight: '1.5' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ 
          padding: isMobile ? '24px 20px' : '40px', 
          borderTop: '1px solid rgba(255,255,255,0.08)', 
          textAlign: 'center', 
          color: '#444', 
          fontSize: '12px' 
        }}>
          <p>© 2026 PredictX. Training Trading Platform.</p>
        </footer>
      </div>
    </div>
  )
}
