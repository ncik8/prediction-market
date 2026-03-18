import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oepmupwniliblkuxevyr.supabase.co',
  process.env.SUPABASE_SERVICE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lcG11cHduaWxpYmxrdXhldnlyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzY3MDY3OSwiZXhwIjoyMDg5MjQ2Njc5fQ.FjlfBgNDUO7Skhgg-hpq3vVYrDaMOn3M4afhvkat9Wg'
);

export async function GET() {
  const { data } = await supabase
    .from('price_history_global')
    .select('price, timestamp')
    .order('timestamp', { ascending: false })
    .limit(150);
  
  return Response.json(data || []);
}

export async function POST(request) {
  const { price } = await request.json();
  
  await supabase
    .from('price_history_global')
    .insert({ price });
  
  return Response.json({ success: true });
}
