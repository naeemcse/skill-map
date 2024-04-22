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


const Hero = () => {
    const SpinText = "Find Your People" ;
    const colors = ['bg-blue-500', 'bg-red-500', 'bg-green-500'];
    const heroPhotos = ['driver.jpg','civil_engineer.jpg','teacher.jpg'] ;
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentColorIndex((currentColorIndex + 1) % colors.length); // Cycle through colors
      setCurrentPhotoIndex((currentPhotoIndex + 1) % heroPhotos.length); // Cycle through photos
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentColorIndex]); // Run effect whenever currentColorIndex changes
    return (
        <>
            <motion.div
            
            className={`flex flex-col md:flex-row justify-between  ${colors[currentColorIndex]} transition-all duration-1000 w-full h-[50vh] overflow-hidden pt-10`}

            >
                <div  className='mx-auto '>
                    {/* Search Box location and profession  */}
                       <Text props={SpinText}/>
                       <HompageSearchBar/>

                </div>
                <div className=' mx-auto transition-opacity duration-1000'>
                  <Image src={`/image/${heroPhotos[currentPhotoIndex]}`}
                  className='invisible  md:visible rounded-sm mt-5'
                  width={200}
                  height={200}
                  alt="Picture of the author"/>
                </div>
            </motion.div>
        </>
    );
};

export default Hero;