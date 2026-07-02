from typing import TypedDict, Optional, List, Dict

class GraphState(TypedDict):
    
    # routing
    mode:str
    
    previous_requirements: Optional[Dict]
    feedback_history: Optional[List[Dict]]
    iteration_count: Optional[int]
    convergence_score : Optional[float]
    
    # transcription
    audio_path: Optional[str]
    transcript: Optional[str]
    diarization: Optional[List[Dict]]
    
    #document
    document_path: Optional[str]
    
    # requirments 
    requirements: Optional[Dict]
    feedback: Optional[str]
    
    # approval
    approval_status: Optional[str]
    
    # srs
    srs_text: Optional[str]
    pdf_path: Optional[str]
    
    meeting_id: Optional[str]
    
    