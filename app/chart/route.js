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
    <p class="text-slate-400 text-sm mb-4">Last 30 seconds • Realtime</p>
    
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
    
    let rawPrices = [];
    let maPrices = [];
    const dataPoints = 150;
    const maPeriod = 10;
    const bufferSeconds = 30;
    
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
      
      // Keep only last 30 seconds of data (approx 150 points at 200ms)
      const maxPoints = (bufferSeconds * 1000) / 200;
      if (rawPrices.length > maxPoints) {
        rawPrices = rawPrices.slice(-maxPoints);
      }
      
      const ma = calculateMA(rawPrices, maPeriod);
      maPrices.push(ma);
      if (maPrices.length > maxPoints) {
        maPrices = maPrices.slice(-maxPoints);
      }
      
      window.chart.data.datasets[0].data = maPrices;
      
      if (rawPrices.length > 1) {
        const minPrice = Math.min(...rawPrices);
        const maxPrice = Math.max(...rawPrices);
        window.chart.options.scales.y.min = minPrice - 30;
        window.chart.options.scales.y.max = maxPrice + 30;
      }
      
      window.chart.update('none');
      document.getElementById('priceDisplay').textContent = 'BTC $' + Math.round(price);
      document.getElementById('status').textContent = 'Live • ' + new Date().toLocaleTimeString();
    }
    
    // Initialize chart
    for (let i = 0; i < dataPoints; i++) {
      rawPrices.push(72000);
      maPrices.push(72000);
    }
    
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
    
    // Load initial history from DB
    async function loadHistory() {
      try {
        const thirtySecsAgo = new Date(Date.now() - bufferSeconds * 1000).toISOString();
        const { data } = await supabase
          .from('price_history_global')
          .select('price, timestamp')
          .gte('timestamp', thirtySecsAgo)
          .order('timestamp', { ascending: true });
        
        if (data && data.length > 0) {
          rawPrices = data.map(d => d.price);
          maPrices = rawPrices.map((p, i) => calculateMA(rawPrices.slice(0, i + 1), maPeriod));
          window.chart.data.datasets[0].data = maPrices;
          window.chart.update('none');
          document.getElementById('priceDisplay').textContent = 'BTC $' + Math.round(rawPrices[rawPrices.length - 1]);
        }
      } catch(e) { console.log('Load error:', e); }
    }
    
    // Load initial history - subscribe to INSERT events
    const channel = supabase
      .channel('ticks-stream')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'price_history_global'
        },
        payload => {
          const tick = payload.new;
          rawPrices.push(tick.price);
          
          // Keep only last 30 seconds
          const cutoff = Date.now() - 30000;
          rawPrices = rawPrices.slice(-150);
          
          const ma = calculateMA(rawPrices, maPeriod);
          maPrices.push(ma);
          maPrices = maPrices.slice(-150);
          
          window.chart.data.datasets[0].data = maPrices;
          if (rawPrices.length > 1) {
            window.chart.options.scales.y.min = Math.min(...rawPrices) - 30;
            window.chart.options.scales.y.max = Math.max(...rawPrices) + 30;
          }
          window.chart.update('none');
          document.getElementById('priceDisplay').textContent = 'BTC $' + Math.round(tick.price);
          document.getElementById('status').textContent = 'Live!';
        }
      )
      .subscribe();
    
    document.getElementById('status').textContent = 'Connected!';
    
    // Load history, then start live updates
    loadHistory();
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
