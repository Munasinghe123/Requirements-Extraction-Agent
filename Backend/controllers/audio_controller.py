from graph.workflow import build_graph
from utils.saveFile import save_file
from services.meetings_service import save_requirements

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

    meeting_id=save_requirements(result["requirements"])

    return {"meeting_id": meeting_id}

