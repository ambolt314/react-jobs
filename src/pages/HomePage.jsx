import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from "../components/JobListings.jsx";
import ViewAllJobs from "../components/ViewAllJobs.jsx";

const HomePage = () => {
  return <>
      <Hero/>
      <HomeCards />
      <JobListings isHome={true}/>
      <ViewAllJobs/>
      </>
}
export default HomePage;