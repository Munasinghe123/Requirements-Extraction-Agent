
from agents.requiremtns_extraction_agent import run
from utils.saveFile import save_file

async def handle_audio_upload(file):
    path = save_file(file)
    result = run(path)
    return result






   