import React, { useState } from "react";
import "./InputForm.css";
const InputForm = () => {
  
    const [url, setUrl] = useState('');
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Send the URL to the backend
      const response = await fetch('https://qr-code-generator-3le3.onrender.com/generate-qr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      
      const blob = await response.blob(); // QR image comes as a blob
      const qrUrl = URL.createObjectURL(blob); // Create URL for the image
      
    
      // Open or download the generated QR code
      window.open(qrUrl);
    };
  return (
    <div className="Form">
      <div className="about">
      <h1>Welcome to the QR Generator</h1>
      <p>
        Generate custom QR codes in just a few clicks! Whether you need a QR
        code for a website, contact information, or any other data, our app
        makes it easy and quick. Simply enter your information, customize the
        design, and download your QR code instantly. Start creating your unique
        QR codes now!
      </p>
      </div>
      
      <div className="input_fields">
        <label className="url_label" htmlFor="url">
          Enter your URL
        </label>
        <input type="url" value={url} onChange={(e)=> setUrl(e.target.value)} placeholder="https://www.example.com" />

        <button  onClick={handleSubmit}> GENERATE</button>
        
        
      </div>
      
    </div>
  );
};

export default InputForm;