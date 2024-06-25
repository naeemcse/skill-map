import React from 'react';
import './index.css';
import HompageSearchBar from "@/components/searchBar/HompageSearchBar";
import Text from "@/components/animation/Text";
import Image from "next/image";
// import CarosolPhoto from "@/components/master/home/hero/CarosolPhoto";
import TopCategory from "@/components/master/home/TopCategory";
import MainSection from "@/components/master/home/MainSection";

const AnimateBg = () => {
    const SpinText = "Find Your People" ;
    return (
        <div className="body h-screen">
            <section>
                <div>
                    {/*Content */}
                    <div className={` transition-all duration-1000 ease-linear flex flex-col  w-full h-fit z-0`}>
                        <div className={`flex flex-col md:flex-row justify-between  overflow-hidden pt-10 md:pt-32`}>
                            <div className='mx-auto text-center md:w-1/2'>
                                {/* Search Box location and profession  */}
                                <Text props={SpinText}/>
                                <HompageSearchBar/>

                            </div>
                            <div className='mx-auto md:w-1/2  '>
                                {/*<CarosolPhoto/>*/}
                                <Image className="mx-auto " src="/image/bangladesh-map.svg" height={500} width={500}
                                       alt="Logo"/>

                            </div>

                        </div>
                        <div className="content-center md:mt-8">
                            <TopCategory/>
                        </div>
                    </div>

                </div>
                <div className="leaf">
                    <div>
                        <Image
                            src="/hero/doctor.png"
                            height={80}
                            width={80}
                        />
                      Doctcor
                    </div>
                    <div>
                        <Image
                            src="/hero/electrician.png"
                            height={80}
                            width={80}
                        />
                    </div>
                    <div>
                        <Image
                            src="/hero/doctor.png"
                            height={80}
                            width={80}
                        />
                    </div>
                    <div>
                        <Image
                            src="/hero/doctor.png"
                            height={80}
                            width={80}
                        />
                    </div>
                    <div>
                        <Image
                            src="/hero/doctor.png"
                            height={80}
                            width={80}
                        />
                    </div>
                    <div>
                        <Image
                            src="/hero/doctor.png"
                            height={80}
                            width={80}
                        />
                    </div>
                    <div>
                        <Image
                            src="/hero/doctor.png"
                            height={80}
                            width={80}
                        />
                    </div>
                </div>
                <div className="leaf leaf1">
                    <div>
                        <Image
                            src="/hero/teacher.png"
                            height={80}
                            width={80}
                        />
                    </div>
                    <div>
                        <Image
                            src="/hero/teacher.png"
                            height={80}
                            width={80}
                        />
                    </div>
                    <div>
                        <Image
                            src="/hero/teacher.png"
                            height={80}
                            width={80}
                        />
                    </div>
                    <div>
                        <Image
                            src="/hero/teacher.png"
                            height={80}
                            width={80}
                        />
                    </div>
                    <div>
                        <Image
                            src="/hero/teacher.png"
                            height={80}
                            width={80}
                        />
                    </div>
                    <div>
                        <Image
                            src="/hero/teacher.png"
                            height={80}
                            width={80}
                        />
                    </div>
                    <div>
                        <Image
                            src="/hero/teacher.png"
                            height={80}
                            width={80}
                        />
                    </div>
                </div>
                <div className="leaf leaf2">
                </div>

            </section>

            <MainSection/>
        </div>
    );
};

export default AnimateBg;