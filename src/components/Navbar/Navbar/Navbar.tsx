import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <header className=" bg-white font-extrabold space-x-5 md:flex md:justify-start p-5 md:text-2xl">
      <Link to="/home">HOME</Link>
      <Link to="/aboutme">ABOUT ME</Link>
      <Link to="/mywork">MY WORK</Link>
      <Link to="/contacts">CONTACTS</Link>
    </header>
    </>
  )
}

export default Navbar
