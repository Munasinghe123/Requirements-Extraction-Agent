
from graph.state import GraphState
from langgraph.graph import StateGraph, END 

def should_continue(state: GraphState):
    status = state.get("approval_status")

    if status == "approved":
        return END

    if status == "rejected":
        return "refine"

    return END
   