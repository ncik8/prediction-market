// Simple API route to improve text - avoids CORS
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
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
    
    if (data.choices && data.choices[0] && data.choices[0].message) {
      res.status(200).json({ result: data.choices[0].message.content });
    } else if (data.message && data.message.content) {
      res.status(200).json({ result: data.message.content });
    } else {
      res.status(500).json({ error: 'API returned no result', data });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}