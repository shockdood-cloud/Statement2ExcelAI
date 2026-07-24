import React, { useState } from "react";

function App() {
  const [file, setFile] = useState(null);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Statement2Excel AI</h1>

      <h3>Convert Bank PDF Statement to Excel</h3>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      {file && (
        <p>
          Selected File: {file.name}
        </p>
      )}

      <button>
        Convert PDF
      </button>

      <br /><br />

      <button>
        Download Excel
      </button>

    </div>
  );
}

export default App;
