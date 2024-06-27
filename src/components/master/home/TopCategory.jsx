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
        <div className="mx-auto max-w-screen-md text-center"> {/* Adjust max width as per your requirement */}
            <h1 className="m-2"> Top Category </h1>
            <div className=" flex flex-wrap justify-center"> {/* Added justify-center to center items horizontally */}
                {category.map((item, i) => (
                    <div key={i} className="m-1 border-2 rounded-2xl w-fit p-1  cursor-pointer">
                        <span className="inline-block ml-1"> {item.logo} </span>
                        <span className="m-1 text-xl text-primary"> {item.title} </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCategory;