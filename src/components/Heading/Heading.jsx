
const Heading = ({ title, subtitle }) => {
    return (
      <div className='flex flex-col w-full justify-center items-center my-12'>
        <h1 className='text-4xl text-white font-thin mb-4'>
          {title}
        </h1>
        <p className='text-lg  text-white text-center font-thin'>
          {subtitle}
        </p>
      </div>
    )
  }
  
  export default Heading