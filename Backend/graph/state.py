from typing import TypedDict, Optional, List, Dict

class GraphState(TypedDict):
    mode:str
    audio_path: str
    transcript: Optional[str]
    diarization: Optional[List[Dict]]
    requirements: Optional[Dict]
    feedback: Optional[str]
    approval_status: Optional[str]
    
    