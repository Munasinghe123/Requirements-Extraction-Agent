from fastapi import APIRouter, UploadFile, File, Form,Query
from controllers.process_source import process_source


router = APIRouter()


@router.post('/extract-requirements')
async def extract_requirements(file: UploadFile = File(...)):
    return await process_source(file)
