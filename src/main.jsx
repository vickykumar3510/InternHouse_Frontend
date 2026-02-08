import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import JobDetailsPage from './pages/JobDetailsPage.jsx'
import PostJob from './pages/PostJob.jsx'
import { JobProvider } from './contexts/JobContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/jobdetails/:jobId',
    element: <JobDetailsPage/>
  },
  {
    path: '/postjob',
    element: <PostJob/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JobProvider>
    <ToastContainer position="top-right" autoClose={3000} />
    <RouterProvider router={router} />
    </JobProvider>
  </StrictMode>,
)
