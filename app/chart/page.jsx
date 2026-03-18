export default function ChartPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: 'white', fontSize: '24px', marginBottom: '10px' }}>BTC Live Chart - 5min</h1>
      <div style={{ height: '60vh', background: '#1e293b', borderRadius: '12px', padding: '10px' }}>
        <canvas id="chart"></canvas>
      </div>
      <div id="price" style={{ color: '#22c55e', fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>Loading...</div>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
      <script dangerouslySetInnerHTML={{ 
        __html: `
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
            window.chart.data.datasets[0].data = prices;
            window.chart.update('none');
            document.getElementById('price').textContent = 'BTC $' + Math.round(p);
          }
          
          window.chart = new Chart(document.getElementById('chart'), {
            type: 'line',
            data: {
              labels: Array(maxPoints).fill(''),
              datasets: [{ data: prices, borderColor: '#22c55e', backgroundColor: 'rgba(34,197,94,0.1)', fill: true, tension: 0.8, borderWidth: 2, pointRadius: 0 }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { position: 'right', grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b', callback: v => '$' + Math.round(v) } } }
          });
          
          supabase.channel('ticks').on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'price_history_global' }, payload => {
            update(payload.new.price);
          }).subscribe();
          
          fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT').then(r=>r.json()).then(d => update(parseFloat(d.price)));
        `
      }} />
    </div>
  );
}
