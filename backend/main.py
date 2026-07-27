from fastapi import FastAPI, UploadFile, File
from fastapi.responses import FileResponse
import pdfplumber
import pandas as pd
import os
import uuid

app = FastAPI()

OUTPUT_FOLDER = "../outputs"
os.makedirs(OUTPUT_FOLDER, exist_ok=True)


@app.get("/")
def home():
    return {"message": "Statement2Excel AI Backend Running"}


    @app.post("/convert")
    async def convert_pdf(file: UploadFile = File(...)):
        pdf_path = f"/tmp/{uuid.uuid4()}.pdf"

            with open(pdf_path, "wb") as f:
                    f.write(await file.read())

                        transactions = []

                            with pdfplumber.open(pdf_path) as pdf:
                                    for page in pdf.pages:
                                                text = page.extract_text()

                                                            if text:
                                                                            lines = text.split("\n")

                                                                                            for line in lines:
                                                                                                                transactions.append([line])

                                                                                                                    df = pd.DataFrame(transactions, columns=["Description"])

                                                                                                                        output_file = f"{OUTPUT_FOLDER}/statement.xlsx"
                                                                                                                            df.to_excel(output_file, index=False)

                                                                                                                                return {
                                                                                                                                        "message": "Excel created successfully",
                                                                                                                                                "file": "statement.xlsx"
                                                                                                                                                    }


                                                                                                                                                    @app.get("/download")
                                                                                                                                                    def download():
                                                                                                                                                        return FileResponse(
                                                                                                                                                                f"{OUTPUT_FOLDER}/statement.xlsx",
                                                                                                                                                                        filename="statement.xlsx"
                                                                                                                                                                            )