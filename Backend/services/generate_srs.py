import json
import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq

load_dotenv()

llm = ChatGroq(
    model="llama-3.1-8b-instant",
    api_key=os.getenv("GROQ_API_KEY"),
    temperature=0
)


def generate_srs(requirements):

    functional = requirements.get("functional", [])
    non_functional = requirements.get("non_functional", [])

    functional_text = "\n".join(
        [f"- {req['description']}" for req in functional]
    )

    non_functional_text = "\n".join(
        [f"- {req['description']}" for req in non_functional]
    )

    prompt = f"""
You are a senior software engineer and business analyst.

Generate a professional Software Requirements Specification (SRS) document.

Use the following structure:

1. Introduction
2. Purpose
3. Scope
4. Functional Requirements
5. Non-Functional Requirements
6. System Constraints
7. Conclusion

Functional Requirements:
{functional_text}

Non-Functional Requirements:
{non_functional_text}

Generate a clean, professional SRS document.
"""

    response = llm.invoke(prompt)

    return response.content