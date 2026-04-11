// AI Read API - uses vision model to read handwriting from image
export async function POST(req) {
  try {
    const { image } = await req.json();

    if (!image) {
      return Response.json({ error: 'Image is required' }, { status: 400 });
    }

    // Use MiniMax's vision API
    const response = await fetch('https://api.minimax.chat/v1/text/chatcompletion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtaW5pbWF4Iiwicm9sZSI6ImF1dGgiLCJpYXQiOjE3NDQwMzIwMDAsImV4cCI6MjAwMDAwMDAwMH0.s2LH2WLeK9K3N7x9YnVx9Xj8Y3N5M8H2P6Q4R1V0W5Y'
      },
      body: JSON.stringify({
        model: 'abab6.5s-chat', 
        messages: [
          { role: 'user', content: [
            { type: 'image_url', image_url: { url: image } },
            { type: 'text', text: 'Read and transcribe ALL the handwriting in this image. Output ONLY the text nothing else. If nothing is written say "No text found".' }
          ]}
        ]
      })
    });

    const data = await response.json();
    
    if (data.choices && data.choices[0] && data.choices[0].message) {
      let text = data.choices[0].message.content;
      // Clean up the response
      text = text.replace(/^["']|["']$/g, '').trim();
      return Response.json({ text });
    } else {
      return Response.json({ error: 'No result', details: data });
    }
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}