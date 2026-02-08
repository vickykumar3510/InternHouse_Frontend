import { useContext } from "react"
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar"
import JobContext from "../contexts/JobContext"

const JobDetails = () => {
    const { jobs, loading }  = useContext(JobContext)
    const { jobId } = useParams()

    const selectedJob = jobs.find((j) => j._id === jobId)
    
    return(
        <>
        <Navbar />
        <div className="container">
            {loading && <p>Loading...</p>}

            <h2 className="mt-4 mb-4">{selectedJob?.jobTitle}</h2>
            <div className="card">
  <div className="card-body">
            <p className="card-text"><strong>Company Name:</strong> {selectedJob?.companyName}</p>
          <p className="card-text"><strong>Location:</strong> {selectedJob?.location}</p>
          <p className="card-text"><strong>Salary:</strong> Rs. {selectedJob?.salary}</p>
          <p className="card-text"><strong>Job Type:</strong> {selectedJob?.jobType}</p>
          <p className="card-text"><strong>Description:</strong> {selectedJob?.jobDescription}</p>
          <p className="card-text"><strong>Qualification:</strong></p> 
          <ol>{selectedJob?.requiredQualification.map((r, idx) => (
            <li key={idx}>{r}</li>
          ))}</ol>
  </div>
</div>



        </div>
       
        </>
    )
}
export default JobDetails