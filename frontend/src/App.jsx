import React, { useState } from "react";

function App() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const convertPDF = async () => {
    if (!file) {
      setMessage("Please select a PDF first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "http://localhost:8000/convert",
        {
          method: "POST",
          body: formData
        }
      );

      const data = await response.json();

      setMessage(
        "Success: " + data.status
      );

    } catch (error) {
      setMessage(
        "Backend connection failed"
      );
    }
  };


  return (
    <div style={{
      minHeight:"100vh",
      background:"#f5f7fb",
      padding:"40px",
      fontFamily:"Arial"
    }}>

      <div style={{
        maxWidth:"600px",
        margin:"auto",
        background:"white",
        padding:"30px",
        borderRadius:"15px",
        textAlign:"center"
      }}>

        <h1>📄 Statement2Excel AI</h1>

        <p>
          Convert Bank PDF Statement to Excel
        </p>

        <input
          type="file"
          accept=".pdf"
          onChange={(e)=>setFile(e.target.files[0])}
        />

        <br/><br/>

        <button
          onClick={convertPDF}
          style={{
            padding:"12px 25px",
            background:"#2563eb",
            color:"white",
            border:"none",
            borderRadius:"8px"
          }}
        >
          Convert PDF
        </button>

        <p>{message}</p>

      </div>

    </div>
  );
}

export default App;
