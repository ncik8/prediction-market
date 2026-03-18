'use client';

import { useEffect, useRef, useState } from 'react';

export default function ChartPage() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const [price, setPrice] = useState('Loading...');
  const pricesRef = useRef([]);
  const maxPoints = 150;

  useEffect(() => {
    // Dynamically load Chart.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = initChart;
    script.onerror = () => {
      // Fallback: try again or show error
      setPrice('Error loading chart');
    };
    document.head.appendChild(script);

    return () => {
      if (chartRef.current) chartRef.current.destroy();
    };
  }, []);

  const initChart = () => {
    if (!canvasRef.current || chartRef.current || !window.Chart) return;

    // Fetch initial price
    fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
      .then(r => r.json())
      .then(d => {
        const initialPrice = parseFloat(d.price);
        for (let i = 0; i < maxPoints; i++) {
          pricesRef.current.push(initialPrice);
        }
        createChart();
      })
      .catch(() => {
        for (let i = 0; i < maxPoints; i++) {
          pricesRef.current.push(70000);
        }
        createChart();
      });

    function createChart() {
      if (!window.Chart) return;
      
      chartRef.current = new window.Chart(canvasRef.current, {
        type: 'line',
        data: {
          labels: Array(maxPoints).fill(''),
          datasets: [{
            data: [...pricesRef.current],
            borderColor: '#22c55e',
            backgroundColor: 'rgba(34,197,94,0.1)',
            fill: true,
            tension: 0.8,
            borderWidth: 2,
            pointRadius: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { display: false },
            y: { 
              position: 'right',
              grid: { color: 'rgba(255,255,255,0.05)' },
              ticks: { color: '#64748b', callback: v => '$' + Math.round(v) }
            }
          }
        }
      });

      // Update every second
      setInterval(async () => {
        try {
          const res = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
          const data = await res.json();
          const p = parseFloat(data.price);
          
          pricesRef.current.push(p);
          if (pricesRef.current.length > maxPoints) pricesRef.current.shift();
          chartRef.current.data.datasets[0].data = pricesRef.current;
          chartRef.current.update('none');
          setPrice('BTC $' + Math.round(p));
        } catch (e) {
          console.error(e);
        }
      }, 1000);
    }
  };

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', padding: 20 }}>
      <h1 style={{ color: 'white', fontSize: 24, marginBottom: 10 }}>BTC Live Chart</h1>
      <div style={{ height: '60vh', background: '#1e293b', borderRadius: 12, padding: 10 }}>
        <canvas ref={canvasRef}></canvas>
      </div>
      <div style={{ color: '#22c55e', fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>
        {price}
      </div>
    </div>
  );
}
