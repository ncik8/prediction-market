'use client';

import { useEffect, useRef, useState } from 'react';

export default function ChartPage() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const [price, setPrice] = useState('Loading...');
  const pricesRef = useRef([]);
  const maxPoints = 150;

  // Initialize prices array
  useEffect(() => {
    for (let i = 0; i < maxPoints; i++) {
      pricesRef.current.push(72000);
    }
  }, []);

  // Initialize Chart.js and Supabase connection
  useEffect(() => {
    const initChart = async () => {
      const Chart = (await import('chart.js/auto')).default;

      chartRef.current = new Chart(canvasRef.current, {
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
          plugins: {
            legend: { display: false }
          },
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

      // Initialize Supabase
      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(
        'https://oepmupwniliblkuxevyr.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lcG11cHduaWxpa2JsdXhldnlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NzA2NzksImV4cCI6MjA4OTI0NjY3OX0.OWHh1MW8qewCvXF5JW2a5-LVuQP9TWiOFGwnhIiifN0'
      );

      // Subscribe to price updates
      supabase.channel('ticks').on('postgres_changes', { 
        event: 'INSERT', 
        schema: 'public', 
        table: 'price_history_global' 
      }, payload => {
        updateChart(payload.new.price);
      }).subscribe();

      // Fetch initial price
      fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
        .then(r => r.json())
        .then(d => updateChart(parseFloat(d.price)))
        .catch(console.error);
    };

    initChart();

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const updateChart = (p) => {
    pricesRef.current.push(p);
    if (pricesRef.current.length > maxPoints) {
      pricesRef.current.shift();
    }
    
    if (chartRef.current) {
      chartRef.current.data.datasets[0].data = [...pricesRef.current];
      chartRef.current.update('none');
    }
    
    setPrice('BTC $' + Math.round(p));
  };

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: 'white', fontSize: '24px', marginBottom: '10px' }}>BTC Live Chart - 5min</h1>
      <div style={{ height: '60vh', background: '#1e293b', borderRadius: '12px', padding: '10px' }}>
        <canvas ref={canvasRef} id="chart"></canvas>
      </div>
      <div id="price" style={{ color: '#22c55e', fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>
        {price}
      </div>
    </div>
  );
}
