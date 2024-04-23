import React from 'react';
import { FaWifi } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
const category = [
{
        title: "Internet",logo: <FaWifi />
},
{
    title: "Electronics",logo: <FaWifi />
},{
        title: "App Developer",logo: <BsAndroid2 />
    },
    {
        title: "Doctor",logo:<FaUserDoctor />
    },
]


const TopCategory = () => {
    return (
            <div className="mx-auto ">
                <h1 className=""> Top Category </h1>
                <div className="flex flex-wrap">
                    {
                        category.map((item,i) => (
                            <div key={i} className=" m-1 border-2 rounded-2xl w-fit p-1  text-background cursor-pointer">
                                <span className="inline-block ml-1"> {item.logo} </span> <span
                                className="m-1 text-xl"> {item.title} </span>
                            </div>
                        ))
                    }


                </div>

            </div>
    );
};

export default TopCategory;