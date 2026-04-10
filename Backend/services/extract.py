import ollama
import json
import re

def clean_json(content):
    content = content.replace("```json", "").replace("```", "").strip()
    match = re.search(r"\{.*\}", content, re.DOTALL)
    return match.group(0) if match else content


def extract_requirements(transcript: str):
    prompt = f"""
You are a software requirements analyst.

Extract ONLY software/system-related requirements.

If the conversation does NOT contain software requirements,
return EXACTLY this JSON and NOTHING ELSE:

{{
  "functional": [],
  "non_functional": []
}}

Rules:
- Output MUST be valid JSON
- No explanations
- No markdown
- No extra text

Conversation:
{transcript}
"""

    response = ollama.chat(
        model="gemma3:4b",
        messages=[{"role": "user", "content": prompt}]
    )

    content = response['message']['content']
    cleaned = clean_json(content)

    try:
        return json.loads(cleaned)
    except:
        return {"error": "invalid json", "raw": content}