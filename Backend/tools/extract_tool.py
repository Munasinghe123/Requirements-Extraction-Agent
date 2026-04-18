from services.extract import extract_requirements

def extraction_tool(transcript:str) -> str:
   
    result = extract_requirements(transcript)
    return str(result)