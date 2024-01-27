import { useState } from 'react';
import bannerImg from '../assets/3.jpeg'

const About=()=>{
    const[data,setData]=useState({
        image:bannerImg,
        title:"React Developer",
        desc1:`I like to develop web apps.`,
        actionButton:{
            title:"Read More",
            link:"/read more"
        }
    })
    return (
        <>
        <div className="main py-16 border flex items-center bg-gray-100">
            <h1 className="text-4xl font-bold pb-16 text-center">About Me</h1>
            {/* <div className="left-box w-full flex justify-center">
             image container 
                <img src={bannerImg} className='w-fit' alt="supriya singh" />
    </div> */}
            <div className="text_container m-10 p-10 flex border justify-center">
                <div className='space-y-5 '>
                    <h1 className='text-3xl font-semibold'>{data.title}</h1>
                    <p>{data.desc1}</p>
                <button className='bg-orange-500 px-3 py-2 rounded-full'>{data.actionButton.title}</button>
                </div>
            </div>

        </div>
        </>
    )
}
export default About;