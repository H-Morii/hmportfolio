import Navbar from "../components/components/Navbar/Navbar"
import Profile from "../components/components/Profile.tsx/Profile"
import Project from "../components/components/Projects/Project"
import Title from "../components/components/Title/Title"

const Home = () => {
  return (
    <>
    <Navbar/>
    <Title/>
    <Profile/>
    <Project/>
    <div className="h-[200px]">

    </div>
    </>
  )
}

export default Home