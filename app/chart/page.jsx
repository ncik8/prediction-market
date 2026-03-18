'use client';

import { useEffect, useRef, useState } from 'react';

export default function ChartPage() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const [price, setPrice] = useState('Loading...');
  const pricesRef = useRef([]);
  const maxPoints = 150;

  useEffect(() => {
    for (let i = 0; i < maxPoints; i++) {
      pricesRef.current.push(72000);
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current || chartRef.current) return;

    // Wait for Chart.js to load
    const init = () => {
      if (!window.Chart) {
        setTimeout(init, 100);
        return;
      }

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

      // Supabase
      const supabase = window.supabase.createClient(
        'https://oepmupwniliblkuxevyr.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lcG11cHduaWxpa2JsdXhldnlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NzA2NzksImV4cCI6MjA4OTI0NjY3OX0.OWHh1MW8qewCvXF5JW2a5-LVuQP9TWiOFGwnhIiifN0'
      );

      supabase.channel('ticks').on('postgres_changes', { 
        event: 'INSERT', 
        schema: 'public', 
        table: 'price_history_global' 
      }, payload => {
        updateChart(payload.new.price);
      }).subscribe();

      fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
        .then(r => r.json())
        .then(d => updateChart(parseFloat(d.price)))
        .catch(console.error);

      function updateChart(p) {
        pricesRef.current.push(p);
        if (pricesRef.current.length > maxPoints) pricesRef.current.shift();
        chartRef.current.data.datasets[0].data = pricesRef.current;
        chartRef.current.update('none');
        setPrice('BTC $' + Math.round(p));
      }
    };

    init();

    return () => {
      if (chartRef.current) chartRef.current.destroy();
    };
  }, []);

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', padding: 20 }}>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
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
