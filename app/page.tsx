'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://oepmupwniliblkuxevyr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lcG11cHduaWxpa2JsdXhldnlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NzA2NzksImV4cCI6MjA4OTI0NjY3OX0.OWHh1MW8qewCvXF5JW2a5-LVuQP9TWiOFGwnhIiifN0')

const markets = [
  { id: '1', question: 'Will BTC reach $150K by Dec 2026?', asset: 'BTC', yesPrice: 35, noPrice: 65, volume: '$125K' },
  { id: '2', question: 'Will ETH flip BTC by 2027?', asset: 'ETH', yesPrice: 18, noPrice: 82, volume: '$89K' },
  { id: '3', question: 'Will SOL reach $500 by Q2 2026?', asset: 'SOL', yesPrice: 62, noPrice: 38, volume: '$56K' },
  { id: '4', question: 'Will BTC hit $100K in 24h?', asset: 'BTC', yesPrice: 71, noPrice: 29, volume: '$234K' },
]

export default function Home() {
  const [width, setWidth] = useState(1200)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState('en')
  const [showLogin, setShowLogin] = useState(false)
  
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
  
  const doGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin + '/btc-live.html' }
    })
    if (error) alert('Login error: ' + error.message)
  }
  
  return (
    <div style={{ background: '#050505', minHeight: '100vh', color: '#ececec', fontFamily: 'Inter, -apple-system, sans-serif', overflowX: 'hidden' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/public.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.95, zIndex: 0 }} />
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(10,5,20,0.6) 100%)', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <header style={{ padding: isMobile ? '0 16px' : '0 48px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', position: 'fixed', top: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)', zIndex: 100 }}>
          <h1 style={{ fontSize: isMobile ? '18px' : '22px', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>PREDICTX</h1>
          
          {isMobile ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} style={{ background: '#222', border: 'none', color: '#fff', padding: '8px 10px', borderRadius: 4, fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>{lang === 'en' ? '中文' : 'EN'}</button>
              <Link href="#" onClick={() => setShowLogin(true)} style={{ background: '#2962ff', color: '#fff', padding: '8px 14px', borderRadius: 4, fontSize: 12, fontWeight: 600, textDecoration: 'none' }}>Login</Link>
              <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 24, cursor: 'pointer', padding: 8 }}>{menuOpen ? '✕' : '☰'}</button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} style={{ background: '#222', border: 'none', color: '#888', padding: '8px 12px', borderRadius: 4, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>{lang === 'en' ? '中文' : 'EN'}</button>
              <Link href="#" style={{ color: '#888', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Markets</Link>
              <Link href="#" style={{ color: '#888', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Products</Link>
              <Link href="#" style={{ color: '#888', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Community</Link>
              <Link href="#" onClick={() => setShowLogin(true)} style={{ background: 'transparent', border: '1px solid #333', color: '#fff', padding: '10px 20px', borderRadius: 4, fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Sign In</Link>
              <Link href="#" onClick={() => setShowLogin(true)} style={{ background: '#2962ff', border: 'none', color: '#fff', padding: '10px 20px', borderRadius: 4, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Get Started</Link>
            </div>
          )}
        </header>

        {/* Mobile Menu */}
        {isMobile && menuOpen && (
          <div style={{ position: 'fixed', top: 64, left: 0, right: 0, background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)', zIndex: 99, padding: '20px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Link href="#" onClick={() => setMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 500, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Markets</Link>
              <Link href="#" onClick={() => setMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 500, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Products</Link>
              <Link href="#" onClick={() => setMenuOpen(false)} style={{ color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 500, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Community</Link>
              <Link href="#" onClick={() => { setMenuOpen(false); setShowLogin(true); }} style={{ background: '#2962ff', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 600, padding: '14px', borderRadius: 6, textAlign: 'center', marginTop: 8 }}>Get Started</Link>
            </nav>
          </div>
        )}

        {/* Login Modal */}
        {showLogin && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)' }}>
            <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 16, padding: 20, width: '90%', maxWidth: 300 }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6, textAlign: 'center', color: '#fff' }}>Join PredictX</h3>
              <p style={{ fontSize: 13, color: '#94a3b8', textAlign: 'center', marginBottom: 20 }}>Create account to start trading</p>
              <input type="email" placeholder="Email" style={{ width: '100%', background: '#0f172a', border: '1px solid #334155', borderRadius: 8, padding: '10px 12px', color: '#fff', fontSize: 13, marginBottom: 10, boxSizing: 'border-box' }} />
              <input type="password" placeholder="Password" style={{ width: '100%', background: '#0f172a', border: '1px solid #334155', borderRadius: 8, padding: '12px 14px', color: '#fff', fontSize: 14, marginBottom: 14, boxSizing: 'border-box' }} />
              <div style={{ display: 'flex', gap: 10 }}>
                <Link href="/btc-live.html?login=1" onClick={() => setShowLogin(false)} style={{ flex: 1, background: '#3b82f6', border: 'none', borderRadius: 8, padding: '10px 16px', color: '#fff', fontSize: 14, fontWeight: 600, textAlign: 'center', textDecoration: 'none', cursor: 'pointer' }}>Login</Link>
                <Link href="/btc-live.html" onClick={() => setShowLogin(false)} style={{ flex: 1, background: '#22c55e', border: 'none', borderRadius: 8, padding: '10px 16px', color: '#fff', fontSize: 14, fontWeight: 600, textAlign: 'center', textDecoration: 'none', cursor: 'pointer' }}>Sign Up</Link>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                <div style={{ flex: 1, height: 1, background: '#334155' }}></div>
                <span style={{ padding: '0 12px', color: '#64748b', fontSize: 12 }}>or continue with</span>
                <div style={{ flex: 1, height: 1, background: '#334155' }}></div>
              </div>
              
              <button onClick={doGoogleLogin} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#fff', color: '#000', fontWeight: 600, padding: '12px 16px', borderRadius: 8, border: 'none', cursor: 'pointer', fontSize: 14 }}>
                <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Continue with Google
              </button>
              
              <button onClick={() => setShowLogin(false)} style={{ width: '100%', background: 'transparent', border: '1px solid #475569', borderRadius: 8, padding: 12, color: '#94a3b8', fontSize: 13, cursor: 'pointer', marginTop: 16 }}>Cancel</button>
            </div>
          </div>
        )}

        {/* Hero */}
        <section style={{ padding: isMobile ? (menuOpen ? '180px 20px 60px' : '100px 20px 60px') : '160px 48px 100px', maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: isMobile ? '28px' : 'clamp(36px, 7vw, 58px)', fontWeight: 900, marginBottom: 20, color: '#fff', letterSpacing: -1.5, lineHeight: 1.15 }}>
            Train Hard<br/><span style={{ color: '#6366f1' }}>/ Trade Easy</span>
          </h2>
          
          <p style={{ fontSize: isMobile ? '14px' : '17px', color: '#ccc', maxWidth: isMobile ? '100%' : 480, margin: '0 auto 32px', lineHeight: 1.6 }}>
            Run your strategies through realistic simulations, thousands of runs, and live-like conditions—without risking a cent.
          </p>
          
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
            <Link href="#" onClick={() => setShowLogin(true)} style={{ background: '#fff', padding: '14px 32px', borderRadius: 6, color: '#000', textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'inline-block' }}>Get Started Free</Link>
            <Link href="#" onClick={() => setShowLogin(true)} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', padding: '14px 32px', borderRadius: 6, color: '#aaa', textDecoration: 'none', fontSize: 15, fontWeight: 600, display: 'inline-block' }}>View Markets</Link>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: isMobile ? '24px 20px' : '36px', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 24 }}>
            {[{ label: '$2.4M', sub: 'TOTAL VOLUME' }, { label: '12.5K', sub: 'ACTIVE TRADERS' }, { label: '99.9%', sub: 'UPTIME' }].map((stat, i) => (
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
            {[{ title: 'Lightning Fast', desc: 'Real-time prices' }, { title: '$10,000 Demo', desc: 'Practice free' }, { title: 'Secure Platform', desc: 'Safe & transparent' }, { title: 'Global Access', desc: 'Trade from anywhere' }].map((f, i) => (
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
