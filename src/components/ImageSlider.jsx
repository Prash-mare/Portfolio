import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ImageData } from '../constants';

const ImageSlider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 10
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (


        <>
        <div className='flex flex-col w-full p-5'>
        <Carousel
                responsive={responsive}
                infinite={true}
                draggable={true}
                autoPlay={true}
                autoPlaySpeed={500}
                customTransition='all 2s'
                focusOnSelect={true}
                transitionDuration={1000}
                removeArrowOnDeviceType={["mobile","tablet","desktop"]}
                ssr={true}
            >

                {ImageData.map((d) => (
                    <div>
                        <img className="rounded-full shadow-lg bg-black w-32 h-32  object-cover filter grayscale brightness-100 drop-shadow-lg contrast-100" src={d.img} />
                    </div>
                ))}
             </Carousel>
        </div>
            
        </>
    )
}
export default ImageSlider;