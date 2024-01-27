import bannerImage from '../assets/pic.jpg';
import bannerbg from '../assets/shape3.svg';

const Banner=()=>{
    return (
        <>
            <div className="main w-full h-screen  items-center flex flex-col justify-center" style={{backgroundImage:`url(${bannerbg})`,
                                backgroundSize:"cover"}}>
            <div className=' w-full flex justify-center'>{/* image */}
                <img className=" rounded-full shadow-lg w-64 h-64 object-cover" src={bannerImage}/>
                </div>
                <div 
             className=' w-1/3 flex justify-center text-gray-400 '>
                    <div className='px-4' >
                    <h3 className='mt-3 text-3xl font-semibold' >Hey! I'm,</h3>
                <h1 className='mt-3 text-5xl font-bold'>Supriya Singh</h1>
                <h2 className='mt-3 text-2xl '>I am a Frontend Developer</h2>
                <p className='mt-3'>The things that wakes me up everyday is my passion.Its the fuel for my journey.I'm a learner and always be.
                Looking forward in future to know more about technology and have myself greatly contributing to it.
                So Have a great day!
                Never stop dreaming even if peoples out there laughing.</p>
                <br/>
                <div className='icon_container space-x-5 flex '>
                    <a href="" className="cursor-pointer animate-pulse hover:bg-orange-500 px-3 py-4 w-14 h-14 rounded-full flex justify-center bg-black items-center">
                    <i className='text-3xl fa-brands fa-github'></i>

                    </a>
                    <a href="" className="cursor-pointer animate-pulse hover:bg-orange-500 px-3 py-4 w-14 h-14 rounded-full flex justify-center bg-black items-center">
                    <i className='text-3xl  fa-brands fa-linkedin'></i>

                    </a>



                </div> 
                <br></br>

                <a className='px-3 py-2 bg-black rounded-full mt-4 shadow-lg' href="/contact">Know More</a>
                    </div>
                    {/* text */}
                
                </div>
                
            </div>
        </>
    )
}
export default Banner;