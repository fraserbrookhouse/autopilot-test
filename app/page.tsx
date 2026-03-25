"use client"

import { useState, useEffect } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(c => c + 1)
  }, [])

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Autopilot Test</h1>
      <p>This project was set up by the project-autopilot skill.</p>
      <p style={{ marginTop: '1rem' }}>You've visited this page {count} times.</p>
      <button
        onClick={() => setCount(0)}
        style={{ marginTop: '0.5rem', padding: '0.4rem 1rem', cursor: 'pointer' }}
      >
        Reset
      </button>
    </main>
  )
}
