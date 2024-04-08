import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { SiLinktree } from "react-icons/si";

const Profile = () => {
  return (
    <>
    <div className="h-[100vh]">
    <div className="flex pl-4 ">
    <div className='h-[350px] w-[300px] bg-white shadow-2xl rounded-md'>
      <figure>
        
      </figure>
    </div>
    <div className="flex flex-col justify-end px-5">
      <h1 className="text-[1.5rem] md:text-[3rem]">森 春輝</h1>
      <h2 className="text-[0.5rem] md:text-[0.9rem] font-semibold md:opacity-50">{`${'{'}`} Mori, Haruki {`${'}'}`}</h2>
    </div>
    </div>
    <div className=" flex p-4 space-x-3">
      {/* <a href="https://flowcv.com/resume/1vw6l2gktd">Resume</a> */}
      <a href="https://www.linkedin.com/in/haruki-mori/"><BsLinkedin size={25}/></a>
      <a href="https://github.com/H-Morii"><AiFillGithub size={25}/></a>
      <a href="https://linktr.ee/Harukimori"><SiLinktree size={25}/></a>
    </div>
    </div>
    <div className="">
      
    </div>
    </>
  )
}

export default Profile
