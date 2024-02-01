import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ImageData } from '../constants';

const ImageSlider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items:3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (


        <>
        <div className='flex flex-col w-full xl:w-1/3 p-5 shadow-lg bg-red-200 dark:bg-black'>
        <div className='text-3xl text-slate-400 dark:text-white'>Timeline</div>
        <Carousel
                responsive={responsive}
                infinite={true}
                draggable={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                customTransition='all 2s'
                focusOnSelect={true}
                transitionDuration={1000}
                removeArrowOnDeviceType={["mobile","tablet","desktop"]}
                ssr={true}
            >

                {ImageData.map((d) => (
                    <div className='flex justify-center items-center'>
                        <img className=" bg-black w-32 h-32 rounded  object-cover filter grayscale brightness-100  contrast-100" src={d.img} />
                    </div>
                ))}
             </Carousel>
        </div>
            
        </>
    )
}
export default ImageSlider;