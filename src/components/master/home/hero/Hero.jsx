"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import driver from "/public/image/driver.jpg"
import civil_engineer from "/public/image/civil_engineer.jpg" ;
import teacher from "/public/image/teacher.jpg" ;

import React from 'react';
import { motion } from "framer-motion"
import Text from '@/components/animation/Text';
import HompageSearchBar from "@/components/searchBar/HompageSearchBar";
import TopCategory from "@/components/master/home/TopCategory";
import CarosolPhoto from "@/components/master/home/hero/CarosolPhoto";

const Hero = () => {
    const SpinText = "Find Your People" ;
    const colors = ['bg-blue-500', 'bg-red-500', 'bg-green-500','bg-[#9B3908]','bg-[#5E1528]'];
    const heroPhotos = ['driver.jpg','civil_engineer.jpg','teacher.jpg'] ;
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//${colors[currentColorIndex]}
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentColorIndex((currentColorIndex + 1) % colors.length); // Cycle through colors
      setCurrentPhotoIndex((currentPhotoIndex + 1) % heroPhotos.length); // Cycle through photos
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentColorIndex]); // Run effect whenever currentColorIndex changes
    return (
        <div  className={`bg-cyan-300 transition-all duration-1000 ease-linear flex flex-col  w-full h-fit z-0`}>
            <div className={`flex flex-col md:flex-row justify-between  overflow-hidden pt-10 md:pt-32`}>
                <div className='mx-auto text-center md:w-1/2'>
                    {/* Search Box location and profession  */}
                    <Text props={SpinText}/>
                    <HompageSearchBar/>
                    <Image className="mx-auto " src="/image/bangladesh-map.svg" height={500}  width={500}  alt="Logo" />
                </div>
                <div className='mx-auto md:w-1/2 invisible  md:visible '>
                    <CarosolPhoto/>
                {/*    <Image src={`/image/${heroPhotos[currentPhotoIndex]}`}*/}
                {/*           className='invisible  md:visible rounded-sm mt-5 scale-150 ease-in-out'*/}
                {/*           width={200}*/}
                {/*           height={200}*/}
                {/*           alt="Picture of the author"/>*/}

                </div>

            </div>
            <div className="content-center md:mt-8">
                <TopCategory/>
            </div>
        </div>
    );
};

export default Hero;