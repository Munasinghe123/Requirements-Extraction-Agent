from fastapi import APIRouter, UploadFile, File, Form,Query
from controllers.processAudio import handle_audio_upload, transcribe_audio

router = APIRouter()

@router.post('/process-audio')
async def process_audio(file: UploadFile = File(...)):
    return await handle_audio_upload(file)