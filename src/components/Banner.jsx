import { useState } from 'react';
import bannerImage from '../assets/pic.jpg';
import bannerbg from '../assets/shape3.svg';
import { useEffect } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { ImageData } from '../constants';

import ImageSlider from './ImageSlider';




const Banner=()=>{
    const [typeEffect]=useTypewriter({
        words:["FrontEnd Developer","Content Writer","UI/UX Designer","Learner"],
        loop:{}
        
    })
    const [theme,setTheme]=useState(
        localStorage.getItem('theme')? localStorage.getItem("theme"):"desktop"
    );
    const element=document.documentElement
    const darkQuery=window.matchMedia("(prefers-color-scheme:dark)");

    const options=[
        {
            icon:"fa fa-sun",
            text:"light"
        },{
            icon:"fa fa-moon",
            text:"dark"
        },{
            icon:"fa fa-desktop",
            text:"desktop"
        }
    ];
    function onWindowMatch(){
        if(localStorage){
            if(localStorage.theme==='dark'||(!("theme" in localStorage ) && darkQuery.matches) ){
                element.classList.add('dark');
            }else{
                element.classList.remove("dark");
            }
        }
    }
    useEffect(()=>{
            switch(theme){
                case 'dark':
                    element.classList.add('dark');
                    localStorage.setItem('theme','dark')
                    break;

                case 'light':
                    element.classList.remove('dark');
                    localStorage.setItem("theme",'light')
                    break;
               
                deafult:
                localStorage.removeItem("theme")
                break;
            }
    },[theme])
    return (
        <>

        {/* <ImageSlider/> */}
        <section className='bg-red-300 w-full h-screen flex items-center justify-center'>
        <div className="main   w-2/3   bg-white rounded-lg  duration-100  items-center flex flex-col justify-center dark:bg-slate-800 dark:text-white" 
                                >
                                    <div className="fixed top-0 right-10 duration-100 dark:bg-slate-800 dark:text-white bg-gray-100 rounded">
                                        
                                        {
                                            options?.map(opt=>(
                                                <button 
                                                key={opt.text}
                                                onClick={()=>setTheme(opt.text)} 
                                                className={`w-8 b-8 leading-9 text-xl rounded-full m-1 ${theme==opt.text && "text-sky-600"}`}>
                                                <i className={opt.icon}></i>
                                            </button>
                                            ))
                                        }
                                        
                                    
                                    </div>
                                    
                                        <ImageSlider/>

            
                <div 
             className=' w-full sm:h-full  flex justify-center text-gray-900  dark:text-white dark:bg-black '>
                    <div className='px-4' >
                    <h3 className='mt-3 text-2xl font-semibold' >Hey! I'm,</h3>
                <h1 className='mt-1 text-3xl font-bold '>Supriya Singh</h1>
                <h2 className='mt-3 text-2xl '>I am a {typeEffect}</h2>
                <p className='mt-3 text-xl'>This is my first portfolio website where i have tried to add some cool features.I hope you like it.</p>
                <br/>
                <div className='icon_container space-x-5 mb-2 flex '>
                    <a href="" className="cursor-pointer animate-pulse hover:bg-orange-500 px-3 py-4 w-14 h-14 rounded-full flex justify-center bg-white dark:bg-black dark:text-white items-center">
                    <i className='text-3xl fa-brands fa-github'></i>

                    </a>
                    <a href="" className="cursor-pointer animate-pulse hover:bg-orange-500 px-3 py-4 w-14 h-14 rounded-full flex justify-center bg-white text-black dark:bg-black dark:text-white items-center">
                    <i className='text-3xl  fa-brands fa-linkedin'></i>

                    </a>



                </div> 
                

                <a className='px-3 py-2 bg-white font-bold  text-2xl text-black rounded-full  shadow-lg dark:bg-black dark:text-white dark:border-gray-200 ' href="/contact">Contact me</a>
                    </div>
                    {/* text */}
                
                </div>
                
            </div>
        </section>
            
        </>
    )
}
export default Banner;