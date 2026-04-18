from services.diarize import diarize_audio


def diarization_tool(path:str) ->str :
  
    result = diarize_audio(path)
    return str(result)