import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function RequirementReview() {
    const { meetingId } = useParams()
    const [requirements, setRequirements] = useState(null)


    useEffect(() => {
        const fetchRequirements = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/requirements/${meetingId}`)
                setRequirements(res.data.requirements)
                console.log(res.data.requirements)
            } catch (err) {
                console.error(err)
                setRequirements({ functional: [], non_functional: [] })
            }
        }

        if (meetingId) {
            fetchRequirements()
        }
    }, [meetingId])

    if (!requirements) return <div>Loading...</div>

    return (
        <div>
            <h2>Functional Requirements</h2>
            {requirements.functional?.length === 0 && <p>No functional requirements</p>}
            {requirements.functional?.map((r) => (
                <p className="relative text-white" key={r.id}>{r.description}</p>
            ))}

            <h2>Non-Functional Requirements</h2>
            {requirements.non_functional?.length === 0 && <p>No non-functional requirements</p>}
            {requirements.non_functional?.map((r) => (
                <p className="text-white" key={r.id}>{r.description}</p>
            ))}
        </div>
    )

}