import React, { useState } from 'react'
import axios from 'axios'

function UploadAudio() {
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleUpload = async () => {
        if (!file) return;

        setLoading(true)

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await axios.post( "http://127.0.0.1:8000/process-audio", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            const data = await res.data;
            console.log(data);
        } catch (err) {
            console.error(err);
        }

        setLoading(false)
    };

    return (
        <div className='h-screen w-full bg-gradient-to-br from-gray-950 to-gray-900 flex items-center justify-center'>

            <div className='w-full max-w-md bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-8 shadow-xl'>

            
                <h1 className='text-3xl font-semibold text-white text-center mb-6'>
                    Upload Audio
                </h1>

               
                <label className='flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-600 rounded-xl cursor-pointer hover:border-blue-500 transition'>
                    <input
                        type="file"
                        className='hidden'
                        onChange={(e) => setFile(e.target.files[0])}
                    />

                    <p className='text-gray-400'>
                        {file ? file.name : "Click or drag audio file here"}
                    </p>
                </label>

               
                <button
                    onClick={handleUpload}
                    disabled={!file || loading}
                    className={`w-full mt-6 py-3 rounded-xl font-medium transition
                        ${!file || loading
                            ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg"
                        }`}
                >
                    {loading ? "Processing..." : "Upload & Process"}
                </button>

            </div>
        </div>
    )
}

export default UploadAudio