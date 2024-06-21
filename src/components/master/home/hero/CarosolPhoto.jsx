import React from 'react';
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

const CarosolPhoto = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    )
    const photo=["doctor.png","electrician.png","home-shifting.png","teacher.png"] ;
    return (
        <div>
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
            <CarouselContent>
                {photo.map((pic, index) => (
                    <CarouselItem key={index}>
                        <div className="flex aspect-square justify-center p-6">
                           <Image className="w-[400px] h-[300px]" src={`/hero/${pic}`} alt="Doctor" width={300} height={300}/>
                        </div>
                    </CarouselItem>
                ))}
                <CarouselItem >
                        <div className="flex w-full h-auto items-center justify-center p-6">
                            <Image className="w-[400px] h-[300px]" src="/hero/doctor.png" alt="Doctor" width={300} height={300}/>
                    </div>
                </CarouselItem>
            </CarouselContent>
            {/*<CarouselPrevious />*/}
            {/*<CarouselNext />*/}
        </Carousel>
        </div>
    );
};

export default CarosolPhoto;