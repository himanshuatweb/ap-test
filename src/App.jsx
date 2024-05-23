import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import Courses from "./components/Courses"
import FaqSection from "./components/FaqSection"
import Footer from "./components/Footer"
import useFetchData from "./hooks/useFetchData"
import InnerNavBar from "./components/InnerNavBar"
import LoadingSpinner from "./components/Spinner"

function App() {

  const { data: homeData, loading } = useFetchData('https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3')

  if (loading) {
    return (
      <LoadingSpinner />
    )
  }

  return (
    <>
      <NavBar />
      <div className="min-h-full w-full flex-grow">
        <InnerNavBar />
        <HeroSection details={homeData?.details} />
        <Courses courses={homeData?.courses} />
        <FaqSection />

      </div>
      <Footer />
    </>
  )
}

export default App
