import { useState } from "react";
import {useTypewriter,Cursor} from 'react-simple-typewriter';
const Header=()=>{
    const [typeEffect]=useTypewriter({
        words:["Hey!","Hi</>","Namaste^_^","Nomoshkar*_*","Sata Sri Akal@_@","Aadab%_%","Radhe Radhe~_~"],
        loop:{}
        
    })
    const [brandName,setBrandName]=useState("Supriya Singh");
    
    const [actionButton,setActionbutton]=useState({
        title:"Download CV",
        link:"/hire-me"
    })

    return (
        <>
        <div className=" h-20 px-16 bg-gray-200 items-center border main flex justify-center">
            <div className="">
                {/*brand logo*/ }
                <h1 className="text-2xl font-bold ">{typeEffect}</h1>
            </div>
            <div className="space-x-3">
         
            
            </div>
            <div>
                {/*buttons */}
                <a href={actionButton.link} className="px-4 py-2 bg-orange-600 rounded-full text-white">{actionButton.title}</a>
            </div>
        </div>
        </>
    )
}
export default Header;