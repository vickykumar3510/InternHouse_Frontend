import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import JobContext from './contexts/JobContext'
import { toast } from "react-toastify"

function App() {
  const navigate = useNavigate()
  const { jobs, loading, setJobs } = useContext(JobContext)
  const [searchTerm, setSearchTerm] = useState("")

  // Filter jobs based on search term
  const filteredJobs = jobs.filter(j =>
    j.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://intern-house-backend-ten.vercel.app/jobs/${id}`, {
        method: "DELETE"
      })
      if (res.ok) {
        setJobs(prev => prev.filter(j => j._id !== id))
        toast.success("Job Post Deleted successfully.")
      }
    } catch (error) {
      console.log("Failed to delete Job Post", error)
      toast.error("Failed to delete Job Post")
    }
  }

  return (
    <>
      <Navbar />
      <div className='container mt-4'>
        {loading && <p>Loading...</p>}

        <div className="col-6 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Job Title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <h1 className='mt-4 mb-4'>All Jobs</h1>
        <div className='row'>
          {filteredJobs.map((j) => (
            <div className='col-md-4 mb-4' key={j._id}>
              <div className='card h-100'>
                <div className="card-body">
                  <h4 className="card-title">{j.jobTitle}</h4>
                  <p className="card-text"><strong>Company Name:</strong> {j.companyName}</p>
                  <p className="card-text"><strong>Location:</strong> {j.location}</p>
                  <p className="card-text"><strong>Job Type:</strong> {j.jobType}</p>
                              <div className="d-flex flex-column flex-md-row gap-2 mt-3">
              <button
                className="btn btn-primary w-100 w-md-auto"
                onClick={() => navigate(`/jobdetails/${j._id}`)}
              >
                See Details
              </button>
              <button
                className="btn btn-danger w-100 w-md-auto"
                onClick={() => handleDelete(j._id)}
              >
                Delete
              </button>
            </div>
                </div>
              </div>
            </div>
          ))}
          {filteredJobs.length === 0 && !loading && (
            <p>No jobs found matching "{searchTerm}"</p>
          )}
        </div>
      </div>
    </>
  )
}

export default App
