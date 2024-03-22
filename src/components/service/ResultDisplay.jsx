import React from "react";
import { Button } from "../ui/button";
import Link from 'next/link'

const ReseltDisplay = () => {
  return (
    <div className="flex flex-wrap"> 
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg---card shadow-xl rounded-lg text---card-foreground border-2 bordercard-foreground">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border--card-foreground rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-32"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Woman looking front"
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">Sarah Smith</h2>
        <p className="text---card-foreground">Freelance Web Designer</p>
      </div>
      <ul className="py-4 mt-2 text---card-foreground flex items-center justify-around">
        <li className="flex flex-col items-center justify-around">
         Rattings
          <div>2k</div>
        </li>
        <li className="flex flex-col items-center justify-between">
         Total Post 
          <div>10k</div>
        </li>
        <li className="flex flex-col items-center justify-around">
          Experience
          <div>15</div>
        </li>
      </ul>
        <div className="p-4 border-t">
            <div> Service Location :  </div>
        </div>
      <div className="p-4 border-t mx-8 mt-2 justify-between flex">
      <Link href="">   
        <Button> Massage </Button> 
     </Link>
     <Link href="">   
        <Button> Details </Button> 
        </Link>
      </div>
    </div>

    </div>
  );
};

export default ReseltDisplay;
