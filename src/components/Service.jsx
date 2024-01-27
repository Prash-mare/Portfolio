import { useState } from "react";

const Services=()=>{
    const [data,setData]=useState(
        {
            id:"1",
            title:"Web Development",
            description:"I would like to create your website for you.",
            actionButton:{
                title:"Know more",
                link:"/hellodummylink"
            }
        }
    )
return (
    <>
    <div className="main py-16 ">
        <h1 className="text-3xl text-center font-bold">My services</h1>
            <div className="container flex mt-10">
                <div className="shadow-lg bg-slate-200 text-center space-y-2 w-2/3 items-center p-10">
                    <i className="fa fa-computer text-4xl"> </i>
                    <h1>
                    {data.title}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque repellendus ipsum dolore et aliquam possimus laboriosam perspiciatis, accusamus non.
                        </p>
                <button className='bg-orange-500 px-3 py-2 rounded-full'>{data.actionButton.title}</button>

                    </div>
                <div></div>
                <div></div>

            </div>
    </div>
    </>
)
}
export default Services;