// API route to improve text - avoids CORS
export async function POST(req) {
  try {
    const { text } = await req.json();

    if (!text) {
      return Response.json({ error: 'Text is required' }, { status: 400 });
    }

    const response = await fetch('https://api.minimax.chat/v1/text/chatcompletion_pro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtaW5pbWF4Iiwicm9sZSI6ImF1dGgiLCJpYXQiOjE3NDQwMzIwMDAsImV4cCI6MjAwMDAwMDAwMH0.s2LH2WLeK9K3N7x9YnVx9Xj8Y3N5M8H2P6Q4R1V0W5Y'
      },
      body: JSON.stringify({
        model: 'abab6.5s-chat',
        messages: [{
          role: 'user',
          content: 'Correct and improve this handwriting OCR text. Fix any misread characters and make it readable. Output ONLY the corrected text nothing else:\n\n' + text
        }]
      })
    });

    const data = await response.json();
    
    // Handle different response formats
    if (data.choices && data.choices[0] && data.choices[0].message) {
      return Response.json({ result: data.choices[0].message.content });
    } else if (data.message && data.message.content) {
      return Response.json({ result: data.message.content });
    } else {
      return Response.json({ error: 'API returned no result', details: data });
    }
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}