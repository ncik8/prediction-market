import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oepmupwniliblkuxevyr.supabase.co',
  process.env.SUPABASE_SERVICE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lcG11cHduaWxpYmxrdXhldnlyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzY3MDY3OSwiZXhwIjoyMDg5MjQ2Njc5fQ.FjlfBgNDUO7Skhgg-hpq3vVYrDaMOn3M4afhvkat9Wg'
);

export async function GET() {
  // Get last 30 minutes of data (cron saves every minute)
  const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000).toISOString();
  
  const { data } = await supabase
    .from('price_history_global')
    .select('price, timestamp')
    .gte('timestamp', thirtyMinutesAgo)
    .order('timestamp', { ascending: true });
  
  return Response.json(data || [], {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  });
}

export async function POST(request) {
  const { price } = await request.json();
  
  await supabase
    .from('price_history_global')
    .insert({ price });
  
  return Response.json({ success: true });
}
