import { useContext, useState } from "react"
import Navbar from "../components/Navbar"
import JobContext from "../contexts/JobContext"
import { toast } from "react-toastify";


const PostJob = () => {
    const { postJob, loading } = useContext(JobContext)
    const [newJob, setNewJob] = useState({
        jobTitle: '',
        companyName: '',
        location: '',
        salary: '',
        jobType: '',
        jobDescription: '',
        requiredQualification: ''
    })

    const handleChange = (e) => {
    const { name, value } = e.target;
    
    setNewJob({
        ...newJob,
        [name]: name === "salary" ? Number(value) : value  // converted salary to number
    });
}
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if(
           !newJob.jobTitle || !newJob.companyName || !newJob.location || !newJob.salary || !newJob.jobType || !newJob.jobDescription || !newJob.requiredQualification
        ){
            toast.error("Please fill all required fields.")
            return
        }
        
        try{    
                // Converted comma-separated qualifications into an array
    const formattedJob = {
      ...newJob,
      requiredQualification: newJob.requiredQualification
        .split(/[\n,]/)
        .map((q) => q.trim())
        .filter((q) => q.length > 0),
    };

        await postJob(formattedJob)

        toast.success("Job Posted Successfully")

        setNewJob({
            jobTitle: '',
        companyName: '',
        location: '',
        salary: '',
        jobType: '',
        jobDescription: '',
        requiredQualification: ''
        })

        }catch(error){
            toast.error("Failed to Post job")
            console.log(error)
        }
 
    }


        return(
        <>
        <Navbar />
        <div className="container mb-4 mt-2">
            {loading && <p>Loading...</p>}
            <h1>Post a Job</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="jobTitle" className="form-label">Job Title:</label>
                <input placeholder="enter job title" value={newJob.jobTitle} name="jobTitle" type="text" id="jobTitle" onChange={handleChange} className="form-control"/><br/>

                <label htmlFor="companyName" className="form-label">Company Name:</label>
                <input placeholder="enter company name" value={newJob.companyName} name="companyName" type="text" id="companyName" onChange={handleChange} className="form-control"/><br/>

                <label htmlFor="location" className="form-label">Location:</label>
                <input placeholder="enter company location" value={newJob.location} name="location" type="text" id="location" onChange={handleChange} className="form-control"/><br/>

                <label htmlFor="salary" className="form-label">Salary:</label>
                <input placeholder="enter salary" value={newJob.salary} name="salary" type="number" id="salary" onChange={handleChange} className="form-control"/><br/>

                <label htmlFor="jobType" className="form-label">Job Type:</label>
                <select placeholder="enter job type" value={newJob.jobType} name="jobType" id="jobType" onChange={handleChange} className="form-control">
                    <option value="">Please Select</option>
                    <option value="Full-time (On-site)">Full-time (On-site)</option>
                    <option value="Part-time (On-site)">Part-time (On-site)</option>
                    <option value="Full-time (Remote)">Full-time (Remote)</option>
                    <option value="Part-time (Remote)">Part-time (Remote)</option>
                </select><br/>
               
                <label htmlFor="jobDescription" className="form-label">Job Description:</label>
                <textarea placeholder="enter job description" value={newJob.jobDescription} name="jobDescription" type="text" id="jobDescription" onChange={handleChange} className="form-control"></textarea><br/>

                <label htmlFor="requiredQualification" className="form-label">Job Qualifications:</label>
                            <textarea placeholder="enter required qualification(s)" value={newJob.requiredQualification} name="requiredQualification" type="text" id="requiredQualification" onChange={handleChange} className="form-control"></textarea><br/>

                <button className="btn btn-primary" type="submit">Post Job</button>

            </form>
             

        </div>
        </>
    )
}

export default PostJob