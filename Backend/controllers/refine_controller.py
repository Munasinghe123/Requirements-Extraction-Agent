from graph.workflow import build_graph

graph = build_graph()

async def refine_endpoint(req):
    result = graph.invoke({
        "audio_path": None,
        "transcript": None,
        "diarization": None,
        "requirements": req.requirements,
        "feedback": req.feedback,
        "approval_status": "rejected"
    })

    return {
        "requirements": result["requirements"],
        "status": "refined"
    }