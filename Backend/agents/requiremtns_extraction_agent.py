from langchain_ollama import ChatOllama
from langchain_core.prompts import ChatPromptTemplate

from tools.diarize_tool import diarization_tool
from tools.extract_tool import extraction_tool
from tools.transcribe_tool import transcribe_tool


def run(path: str):
    transcript = transcribe_tool(path)
    diarization = diarization_tool(path)
    requirements = extraction_tool(transcript)

    return {
        "transcript": transcript,
        "diarization": diarization,
        "requirements": requirements
    }