from fastapi import APIRouter, UploadFile, File, Form,Query
from controllers.audio_controller import handle_audio_upload

router = APIRouter()

@router.post('/process-audio')
async def process_audio(file: UploadFile = File(...)):
    return await handle_audio_upload(file)