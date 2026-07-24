from fastapi import FastAPI, UploadFile, File

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "Statement2Excel AI Backend Running"
    }

@app.post("/convert")
async def convert_pdf(file: UploadFile = File(...)):
    return {
        "filename": file.filename,
        "status": "PDF received successfully"
    }
