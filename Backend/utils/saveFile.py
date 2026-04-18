import os
import uuid
import shutil

def save_file(file):
    os.makedirs("temp", exist_ok=True)
    filename = f"{uuid.uuid4()}.mp3"
    path = f"temp/{filename}"

    with open(path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return path