import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getPrices() {
  try {
    const res = await fetch('https://px-fawn.vercel.app/api/price?t=' + Date.now());
    const data = await res.json();
    return data?.map(p => p.price) || [];
  } catch(e) {
    return [];
  }
}

export default async function ChartPage() {
  const pricesJson = JSON.stringify([]); // Start empty, Realtime will fill it

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PredictX - BTC Live Chart</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <style>body { background: #0a0a0a; color: white; }</style>
</head>
<body class="p-4">
  <div class="max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold mb-2">BTC Live Chart</h1>
    <p class="text-slate-400 text-sm mb-4">Realtime updates via Supabase</p>
    
    <div class="bg-slate-900 rounded-xl border border-slate-800 p-3 mb-3">
      <div style="height: 300px;">
        <canvas id="chart"></canvas>
      </div>
    </div>
    
    <div class="text-center text-xl font-bold" id="priceDisplay">Loading...</div>
    <div class="text-center text-sm text-slate-500" id="status">Connecting...</div>
  </div>

  <script>
    const SUPABASE_URL = 'https://oepmupwniliblkuxevyr.supabase.co';
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lcG11cHduaWxpa2JsdXhldnlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NzA2NzksImV4cCI6MjA4OTI0NjY3OX0.OWHh1MW8qewCvXF5JW2a5-LVuQP9TWiOFGwnhIiifN0';
    
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    
    const rawPrices = [];
    const maPrices = [];
    const dataPoints = 150;
    const maPeriod = 10;
    
    // Initialize with placeholder data
    for (let i = 0; i < dataPoints; i++) {
      rawPrices.push(72000);
      maPrices.push(72000);
    }
    
    function calculateMA(prices, period) {
      if (prices.length < period) return prices[prices.length - 1] || 72000;
      let sum = 0;
      for (let i = prices.length - period; i < prices.length; i++) {
        sum += prices[i];
      }
      return sum / period;
    }
    
    function updateChart(price) {
      rawPrices.push(price);
      if (rawPrices.length > dataPoints) rawPrices.shift();
      
      const ma = calculateMA(rawPrices, maPeriod);
      maPrices.push(ma);
      if (maPrices.length > dataPoints) maPrices.shift();
      
      window.chart.data.datasets[0].data = maPrices;
      
      const minPrice = Math.min(...rawPrices);
      const maxPrice = Math.max(...rawPrices);
      window.chart.options.scales.y.min = minPrice - 50;
      window.chart.options.scales.y.max = maxPrice + 50;
      
      window.chart.update('none');
      
      document.getElementById('priceDisplay').textContent = 'BTC $' + Math.round(price);
      document.getElementById('status').textContent = 'Live • ' + new Date().toLocaleTimeString();
    }
    
    // Initialize chart
    window.chart = new Chart(document.getElementById('chart'), {
      type: 'line',
      data: {
        labels: Array(dataPoints).fill(''),
        datasets: [{
          data: maPrices,
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
            min: 71500,
            max: 72500,
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#64748b', callback: v => '$' + Math.round(v) }
          }
        }
      }
    });
    
    // Subscribe to Realtime updates
    const channel = supabase
      .channel('price-updates')
      .on('postgres_changes', { 
        event: 'INSERT', 
        schema: 'public', 
        table: 'price_history_global' 
      }, (payload) => {
        console.log('New price:', payload.new.price);
        updateChart(payload.new.price);
      })
      .subscribe();
    
    document.getElementById('status').textContent = 'Connected to Realtime!';
    
    // Also fetch current price immediately
    async function fetchInitialPrice() {
      try {
        const res = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
        const data = await res.json();
        updateChart(parseFloat(data.price));
      } catch(e) { console.log(e); }
    }
    fetchInitialPrice();
  </script>
</body>
</html>`;

  return new Response(html, {
    headers: { 
      'Content-Type': 'text/html',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
  });
}
