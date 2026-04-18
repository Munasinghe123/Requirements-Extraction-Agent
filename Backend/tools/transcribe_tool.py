
from services.transcribe import transcribe_audio


def transcribe_tool(path : str) -> str:
   
    return transcribe_audio(path)
