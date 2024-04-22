"use client";
import React from 'react';
import  {motion} from "framer-motion";

const Text = ({props}) => {
    const massage =props;
    const array = massage.split(" ") ;

    return (
        <div>
            {
                array.map((item, i) => (
                    <motion.span key={i}
                    className='text-2xl md:text-4xl lg:text-6xl  kanit-extrabold'
                    initial={{opacity:0}}
                                 animate={{opacity:1}}
                                 transition={{duration:1,repeat: Infinity,  repeatType: "reverse",
                                  delay:i/10,
                                     }}

                    > {item} </motion.span>
                ))
            }


        </div>
    );
};

export default Text;