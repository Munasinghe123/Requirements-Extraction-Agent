import React, { useState } from 'react'
import axios from 'axios'
import audio from '../Images/audio.png'

function UploadAudio() {
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleUpload = async () => {
        if (!file) return;

        setLoading(true)

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await axios.post("http://127.0.0.1:8000/process-audio", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            const data = await res.data;
            console.log("returned data are, ", data);
        } catch (err) {
            console.error(err);
        }

        setLoading(false)
    };

    return (
        <div className='relative h-screen w-full '>

            <div className='relative h-full w-full grid lg:grid-cols-2 grid-cols-1 xl:px-30  pt-20'>
                <div className='flex items-start justify-center w-full h-full flex-col  space-y-10'>
                     <h1 className='text-white text-6xl uppercase font-bold'
                        style={{ fontFamily: 'Orbitron, sans-serif' }}>Turn audio into <span className='text-cyan-300'>intelligent results</span>  
                    </h1>
                    <div className='w-full max-w-md bg-gray-800/60 backdrop-blur-md border border-cyan-900 rounded-2xl p-8 shadow-xl'>

                        <label className='flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-600 rounded-xl cursor-pointer hover:border-cyan-700 transition'>
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
                                    ? "bg-gray-600 text-white cursor-not-allowed"
                                    : "bg-cyan-700 hover:bg-cyan-800 text-white shadow-lg"
                                }`}
                        >
                            {loading ? "Processing..." : "Upload & Process"}
                        </button>

                    </div>
                </div>

                <div className='overflow-hidden h-[85%] opacity-90 absolute bottom-0 right-20'>
                    <img
                        src={audio}
                        className='w-full h-full object-contain'
                    />
                </div>
            </div>
        </div>
    )
}

export default UploadAudio