import React, { useState } from "react";

function App() {
  const [file, setFile] = useState(null);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5f7fb",
      padding: "40px",
      fontFamily: "Arial"
    }}>

      <div style={{
        maxWidth: "600px",
        margin: "auto",
        background: "white",
        padding: "30px",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
      }}>

        <h1>📄 Statement2Excel AI</h1>

        <p>
          Convert Bank PDF Statements into Excel automatically
        </p>

        <hr />

        <h3>Upload PDF Statement</h3>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <br /><br />

        {file && (
          <p>
            ✅ Selected: {file.name}
          </p>
        )}

        <button style={{
          background: "#2563eb",
          color: "white",
          padding: "12px 25px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px"
        }}>
          Convert PDF
        </button>

        <br /><br />

        <button style={{
          background: "#16a34a",
          color: "white",
          padding: "12px 25px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px"
        }}>
          Download Excel
        </button>

      </div>

    </div>
  );
}
 
export default App;
