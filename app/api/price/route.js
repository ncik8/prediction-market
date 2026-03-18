import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oepmupwniliblkuxevyr.supabase.co',
  process.env.SUPABASE_SERVICE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lcG11cHduaWxpa2JsdXhldnlyIiwicm9sZSI6InNlcnZpY2UiLCJpYXQiOjE3NzM2NzA2NzksImV4cCI6MjA4OTI0NjY3OX0.8vM3i9hK4jW3xN6pL2qR8tY5uJ0oP7dF4sA6vB2cE9g'
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
