from graph.state import GraphState
from services.tanscribe import transcribe_audio
from services.extract import extract_requirements
from services.diarize import diarize_audio
from services.refine_requirements import refine_requirements


def transcribe_node(state: GraphState):
    transcript = transcribe_audio(state["audio_path"])
    return {"transcript": transcript}


def diarization_node(state: GraphState):
    diarization = diarize_audio(state["audio_path"])
    return {"diarization": diarization}


def extraction_node(state: GraphState):
    requirements = extract_requirements(state["transcript"])
    return {"requirements": requirements}


def refine_node(state: GraphState):
    updated = refine_requirements(
        state["requirements"],
        state["feedback"]
    )

    return {
        "requirements": updated
    }
    
def approve_node(state: GraphState):

    return {
        "approval_status": "approved"
    }