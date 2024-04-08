import striveImg from '../../../assets/striveImg.jpeg';

const Project = () => {
  return (
    <>
    <section>
    <div className=" text-center text-[3rem] font-bold">
      Project
    </div>
    <div>
      <div className="flex">
        <div>
        <a href='https://strive-management.com/' className="p-5 text-center">Strive Management</a>
        </div>
        <figure className=''>
          <img src={striveImg} alt="Strive Management" className=' shadow-2xl rounded-xl'/>
        </figure>
      </div>
    </div>
    </section>
    </>
  )
}

export default Project
