from graph.workflow import build_graph
from utils.saveFile import save_file

graph = build_graph()

async def handle_audio_upload(file):
    path = save_file(file)

    result = graph.invoke({
        "audio_path": path,
        "transcript": None,
        "diarization": None,
        "requirements": None,
        "feedback": None,
        "approval_status": None
    })

    return result