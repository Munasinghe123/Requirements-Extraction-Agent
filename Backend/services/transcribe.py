import whisper

def transcribe_audio(file_path: str) -> str:
    print("Loading Whisper model...")
    model = whisper.load_model("base")
    
    print(f"Transcribing {file_path}...")
    result = model.transcribe(file_path)
    
    return result["text"]


if __name__ == "__main__":
    transcript = transcribe_audio("test.mp3")
    print("\n--- TRANSCRIPT ---")
    print(transcript)
       