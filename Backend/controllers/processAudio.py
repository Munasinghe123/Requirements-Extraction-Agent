import os
import uuid
import shutil
from services.transcribe import transcribe_audio
from services.extract import extract_requirements
from services.diarize import diarize_audio

def save_file(file):
    os.makedirs("temp", exist_ok=True)
    filename = f"{uuid.uuid4()}.mp3"
    path = f"temp/{filename}"

    with open(path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return path


async def handle_audio_upload(file):
    path = save_file(file)
    transcript = transcribe_audio(path)
    
    diarization  = diarize_audio(path)

    requirements = extract_requirements(transcript)

    return {
        "transcript": transcript,
        "diarization" : diarization,
        "requirements": requirements
    }
    
    # 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
    
    
    