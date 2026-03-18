'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function BtcLive() {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/test.html')
  }, [router])

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', padding: 40, color: 'white', textAlign: 'center' }}>
      <h1>Loading...</h1>
    </div>
  )
}
