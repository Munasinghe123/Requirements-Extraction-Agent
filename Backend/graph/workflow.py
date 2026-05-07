from langgraph.graph import StateGraph, END
from graph.state import GraphState
from graph.nodes import (
    transcribe_node,
    diarization_node,
    extraction_node,
    refine_node,
    approve_node
)
from graph.router import route_workflow


def build_graph():
    builder = StateGraph(GraphState)

    builder.add_node("router", lambda state: state)
    builder.add_node("transcribe", transcribe_node)
    builder.add_node("diarize", diarization_node)
    builder.add_node("extract", extraction_node)
    builder.add_node("refine", refine_node)
    builder.add_node("approve", approve_node)
    
    builder.set_entry_point("router")
    
    builder.add_conditional_edges(
        "router",
        route_workflow
    )
    
    # extraction
    builder.add_edge("transcribe", "diarize")
    builder.add_edge("diarize", "extract")
    builder.add_edge("extract", END)
    
    # refine
    builder.add_edge("refine", END)
    
    #approve
    builder.add_edge("approve", END)
    
    return builder.compile()
    
    
    
    
    
    
    