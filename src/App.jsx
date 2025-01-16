import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from "./pages/JobPage.jsx";
import AddJobPage from "./pages/AddJobPage.jsx";
import EditJobPage from "./pages/EditJobPage.jsx";



const App = () => {
    // Add new job
    const addJob = async (newJob) => {
        const res = await fetch("/api/jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newJob)
        });
        return res.status;
    }

    // Delete job
    const deleteJob = async (id) => {
        const res = await fetch(`/api/jobs/${id}`, {
            method: "DELETE"
        })
        return res.status;
    }

    //Update job
    const updateJob = async (jobToUpdate) => {
        const res = await fetch(`/api/jobs/${jobToUpdate.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jobToUpdate)
        })
        return res.status;
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout/>} >
                <Route index element={<HomePage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/jobs/edit/:id" element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
                <Route path="/jobs/:id" element={<JobPage deleteJob={ deleteJob }/>} loader = { jobLoader } />
                <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        )
    )


  return <RouterProvider router={router} />
}
export default App