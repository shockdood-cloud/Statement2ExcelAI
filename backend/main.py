from fastapi import FastAPI, UploadFile, File
from fastapi.responses import FileResponse
import pdfplumber
import pandas as pd
import os
import uuid

app = FastAPI()

OUTPUT_FOLDER = "outputs"
os.makedirs(OUTPUT_FOLDER, exist_ok=True)


@app.get("/")
def home():
    return {"message": "Statement2Excel AI Backend Running"}


@app.post("/convert")
async def convert_pdf(file: UploadFile = File(...)):

    pdf_path = f"temp_{uuid.uuid4()}.pdf"

    with open(pdf_path, "wb") as f:
        f.write(await file.read())

    rows = []

    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text = page.extract_text()

            if not text:
                continue

            for line in text.split("\n"):
                rows.append({"Text": line})

    excel_path = os.path.join(
        OUTPUT_FOLDER,
        f"{uuid.uuid4()}.xlsx"
    )

    pd.DataFrame(rows).to_excel(excel_path, index=False)

    os.remove(pdf_path)

    return FileResponse(
        excel_path,
        filename="statement.xlsx"
    )
