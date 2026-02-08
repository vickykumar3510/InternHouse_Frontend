import { createContext, useEffect, useState } from "react";

const JobContext = createContext()

export const JobProvider = ({children}) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    //get the jobs data

    useEffect(() => {
        fetch('https://intern-house-backend-ten.vercel.app/jobs')
        .then(res => res.json())
        .then(data => {
            setJobs(data)
            setLoading(false)
        })
        .catch(err => {
            console.log('error', err)
            setLoading(false)
        })
    }, [])

    // add a job post
    const postJob = async(newJob) => {
        try {
            setLoading(true)
            const res = await fetch('https://intern-house-backend-ten.vercel.app/jobs',{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newJob)
            })

            if(!res.ok){
                throw new Error('Failed to post job')
            }
            const data = await res.json()
            //update the job data instantly
            setJobs(prev => [...prev, data.newJob])

        }catch(error){
            console.log('Error while posting job', error)
        } finally {
            setLoading(false)
        }
    }

    return(
        <JobContext.Provider value={{jobs, loading, postJob, setJobs}}>
            {children}
        </JobContext.Provider>
    )
}

export default JobContext