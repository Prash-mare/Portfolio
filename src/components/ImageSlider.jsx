import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ImageData } from '../constants';

const ImageSlider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (


        <>
        <div className='flex flex-col w-1/3'>
        <Carousel
                responsive={responsive}
                infinite={true}
                draggable={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                customTransition='all 2s'
                focusOnSelect={true}
                transitionDuration={1000}
                removeArrowOnDeviceType={["mobile","tablet","desktop"]}
                ssr={true}
            >

                {ImageData.map((d) => (
                    <div>
                        <img className="  shadow-lg w-32 h-32  object-cover" src={d.img} />
                    </div>
                ))}
             </Carousel>
        </div>
            
        </>
    )
}
export default ImageSlider;