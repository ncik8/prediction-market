import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

export default async function ChartPage() {
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PredictX - BTC Live Chart</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <style>body { background: #0a0a0a; margin: 0; padding: 20px; }</style>
</head>
<body>
  <div style="max-width: 1200px; margin: 0 auto;">
    <h1 style="color: white; font-size: 24px; margin-bottom: 10px;">BTC Live Chart - 5min</h1>
    <div style="height: 60vh; background: #1e293b; border-radius: 12px; padding: 10px;">
      <canvas id="chart"></canvas>
    </div>
    <div id="price" style="color: #22c55e; font-size: 32px; font-weight: bold; text-align: center; margin-top: 10px;">Loading...</div>
  </div>
  <script>
    const supabase = window.supabase.createClient(
      'https://oepmupwniliblkuxevyr.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lcG11cHduaWxpa2JsdXhldnlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NzA2NzksImV4cCI6MjA4OTI0NjY3OX0.OWHh1MW8qewCvXF5JW2a5-LVuQP9TWiOFGwnhIiifN0'
    );
    
    let prices = [];
    const maxPoints = 150;
    
    for(let i=0; i<maxPoints; i++) prices.push(72000);
    
    function update(p) {
      prices.push(p);
      if(prices.length > maxPoints) prices.shift();
      chart.data.datasets[0].data = prices;
      chart.update('none');
      document.getElementById('price').textContent = 'BTC $' + Math.round(p);
    }
    
    const chart = new Chart(document.getElementById('chart'), {
      type: 'line',
      data: {
        labels: Array(maxPoints).fill(''),
        datasets: [{ data: prices, borderColor: '#22c55e', backgroundColor: 'rgba(34,197,94,0.1)', fill: true, tension: 0.8, borderWidth: 2, pointRadius: 0 }]
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { position: 'right', grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b', callback: v => '$' + Math.round(v) } } }
    });
    
    // Subscribe to INSERT events
    supabase.channel('ticks').on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'price_history_global' }, payload => {
      update(payload.new.price);
    }).subscribe();
    
    // Fetch initial price
    fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT').then(r=>r.json()).then(d => update(parseFloat(d.price)));
  </script>
</body>
</html>`;

  return new Response(html, { headers: { 'Content-Type': 'text/html' } });
}
