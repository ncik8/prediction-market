import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://oepmupwniliblkuxevyr.supabase.co',
  process.env.SUPABASE_SERVICE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lcG11cHduaWxpYmxrdXhldnlyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzY3MDY3OSwiZXhwIjoyMDg5MjQ2Njc5fQ.FjlfBgNDUO7Skhgg-hpq3vVYrDaMOn3M4afhvkat9Wg'
);

export const dynamic = 'force-dynamic';

async function getPrices() {
  try {
    const { data } = await supabase
      .from('price_history_global')
      .select('price')
      .order('timestamp', { ascending: true })
      .limit(150);
    return data?.map(p => p.price) || [];
  } catch(e) {
    return [];
  }
}

export async function GET() {
  const prices = await getPrices();
  const pricesJson = JSON.stringify(prices);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PredictX - BTC Live Chart</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>body { background: #0a0a0a; color: white; }</style>
</head>
<body class="p-4">
  <div class="max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold mb-2">BTC Live Chart</h1>
    <p class="text-slate-400 text-sm mb-4">Server-rendered with historical data (${prices.length} points)</p>
    
    <div class="bg-slate-900 rounded-xl border border-slate-800 p-3 mb-3">
      <div style="height: 300px;">
        <canvas id="chart"></canvas>
      </div>
    </div>
    
    <div class="text-center text-xl font-bold" id="priceDisplay">Loading...</div>
  </div>

  <script>
    const initialPrices = ${pricesJson};
    const rawPrices = [];
    const maPrices = [];
    const dataPoints = 150;
    const maPeriod = 10;
    
    function calculateMA(prices, period) {
      if (prices.length < period) return prices[prices.length - 1] || 74000;
      let sum = 0;
      for (let i = prices.length - period; i < prices.length; i++) {
        sum += prices[i];
      }
      return sum / period;
    }
    
    // Initialize with server data
    if (initialPrices && initialPrices.length > 0) {
      for (let i = 0; i < dataPoints; i++) {
        const price = initialPrices[i] || initialPrices[initialPrices.length - 1] || 74000;
        rawPrices.push(price);
        maPrices.push(calculateMA(rawPrices, maPeriod));
      }
    } else {
      for (let i = 0; i < dataPoints; i++) {
        rawPrices.push(74000);
        maPrices.push(74000);
      }
    }
    
    function updateChart(price) {
      rawPrices.push(price);
      if (rawPrices.length > dataPoints) rawPrices.shift();
      
      const ma = calculateMA(rawPrices, maPeriod);
      maPrices.push(ma);
      if (maPrices.length > dataPoints) maPrices.shift();
      
      window.chart.data.datasets[0].data = maPrices;
      window.chart.update('none');
      
      document.getElementById('priceDisplay').textContent = 'BTC $' + Math.round(price);
    }
    
    async function fetchPrice() {
      try {
        const res = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
        const data = await res.json();
        return parseFloat(data.price);
      } catch { return 74000; }
    }
    
    const latestPrice = rawPrices[rawPrices.length - 1] || 74000;
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
            min: latestPrice - 100,
            max: latestPrice + 100,
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#64748b', callback: v => '$' + Math.round(v) }
          }
        }
      }
    });
    
    async function update() {
      const price = await fetchPrice();
      updateChart(price);
    }
    
    update();
    setInterval(update, 200);
  </script>
</body>
</html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' }
  });
}
