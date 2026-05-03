from langgraph.graph import StateGraph, END
from graph.state import GraphState
from graph.nodes import (
    transcribe_node,
    diarization_node,
    extraction_node,
)


def should_continue(state: GraphState):
    if state["approval_status"] == "approved":
        return END
    return "refine"


def build_graph():
    builder = StateGraph(GraphState)

    builder.add_node("transcribe", transcribe_node)
    # builder.add_node("diarize", diarization_node)
    builder.add_node("extract", extraction_node)
    
    builder.set_entry_point("transcribe")

    # builder.add_edge("transcribe", "diarize")
    # builder.add_edge("diarize", "extract")
    builder.add_edge("transcribe", "extract")
    builder.add_edge("extract",END)


    return builder.compile()