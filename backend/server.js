import express from 'express';
import bodyParser from 'body-parser';
import qr from 'qr-image';
import cors from 'cors';



const app = express();
app.use(cors());
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to generate QR code
app.post('/generate-qr',(req, res) => {
  const { url } = req.body; // Get URL from the frontend

  if (!url) {
    return res.status(400).json({ message: 'URL is required' });
  }
  
  

  // Generate the QR code image
  const qrSvg = qr.image(url, { type: 'png' });

  // Set response headers to return an image
  res.setHeader('Content-Type', 'image/png');

  // Pipe the generated QR image to the response
  qrSvg.pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
