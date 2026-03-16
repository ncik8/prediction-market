'use client'

import { useEffect, useState } from 'react'

export default function BtcLive() {
  const [content, setContent] = useState('')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // For now, show a message that this needs the HTML file
    setContent(`
      <div style="padding: 40px; text-align: center; color: white; background: #0f172a; min-height: 100vh;">
        <h1 style="font-size: 32px; margin-bottom: 20px;">Crypto Trading</h1>
        <p>Loading trading interface...</p>
      </div>
    `)
    
    // Try to fetch the static file
    fetch('/btc-live.html')
      .then(res => {
        if (res.ok) return res.text()
        throw new Error('Not found')
      })
      .then(html => {
        setContent(html)
        setLoaded(true)
      })
      .catch(() => {
        // Keep the loading message
      })
  }, [])

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: content }}
      style={{ background: '#0a0a0a', minHeight: '100vh' }}
    />
  )
}
