
import React from 'react';
import Link from "next/link"
import Image from 'next/image';
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import PhoneNumber from "@/components/PhoneNumber"
import EmailCopy from "@/components/EmailCopy"
const ServiceProviderProfile = ({person}) => {
    return (
      <div>
       
  <div className="bg-background p-4">
    <div className="border-1 shadow-lg shadow-primary rounded-lg">
      {/* top content */}
      <div className="flex rounded-t-lg bg-cover sm:px-2 w-full bg-primary">
        <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3 border-2 border-card-foreground">
          <Image src={person.profilePhoto || "/image/dummyUser.png"} alt={person.firstName} width={200} height={100} loading = 'lazy'/>
        </div>
        <div className="w-2/3 sm:text-center pl-5 mt-10 text-start">
          <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl">
          {person.firstName}
          </p>
          <p className="text-heading"> {person.profession}</p>
          <p className="text-sm"> {person.location}</p>

        </div>
      </div>
      {/* main content */}
      <div className="p-5">
        <div className="flex flex-col sm:flex-row sm:mt-10">
          <div className="flex flex-col sm:w-1/3">
            {/* My contact */}
            <div className="py-3 sm:order-none order-3">
              <h2 className="text-lg font-poppins font-bold text-top-color">My Contact</h2>
              <div className="border-2 w-20 border-top-color my-3" />
              <div>
                <div className="flex items-center my-1">
                 <EmailCopy emailAddress={person.email}/>
                </div>
                <div className="flex items-center my-1">
                  
                {person.mobile && <PhoneNumber phoneNumber={person.mobile} /> } {person.whatsApp && <FaWhatsappSquare className="text-green-500"/>}
                </div>
                <div className="flex items-center my-1">
                  <Link href={person.facebookProfile || ""} target="_blank" className="text-foreground cursor-pointer hover:text-primary">
                <FaFacebook className="text-blue-500 mr-2 inline-block"/>
                 Link for Facebook
                  </Link>
                </div>
                <div className="flex items-center my-1">
                <Link href={person.linkedInProfile || ""} target="_blank" className="text-foreground cursor-pointer hover:text-primary">
                <FaLinkedin className="text-blue-500 mr-2 inline-block cursor-pointer hover:text-primary"/>
                 Link for Linkdin
                  </Link>
                </div>
              </div>
            </div>
            {/* My Location */}
            <div className="py-3 sm:order-none order-2">
              <h2 className="text-lg font-poppins font-bold text-top-color"> Location </h2>
              <div className="border-2 w-20 border-top-color my-3" /><div>
                <div className="flex items-center my-1">
                  <a className="text-foreground hover:text-primary cursor-pointer">
                    Division: {person.divisionName}
                  </a>
                  <div className="ml-2"><a className="text-foreground hover:text-primary cursor-pointer">  District: {person.districtName} </a> </div>
                  <div className="ml-2"><a className="text-foreground hover:text-primary cursor-pointer">  Upzilla: {person.upzillaName} </a> </div>

                </div>
              {/* Here will be Service Name with Link  */}
              </div>
            </div>
            {/* Skills */}
            <div className="py-3 sm:order-none order-2">
              <h2 className="text-lg font-poppins font-bold text-top-color"> Services </h2>
              <div className="border-2 w-20 border-top-color my-3" /><div>
                <div className="flex items-center my-1">
                  <a className="w-6 text-foreground hover:text-orange-600">
                    
                  </a>
                  <div className="ml-2"> </div>
                </div>
              {/* Here will be Service Name with Link  */}
              </div>
            </div>
            {/* My Post And Link */}
            <div className="py-3 sm:order-none order-1">
              <h2 className="text-lg font-poppins font-bold text-top-color"> My Post </h2>
              </div>
            </div>
          <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
            {/* About me */}
            <div className="py-3">
              <h2 className="text-lg font-poppins font-bold text-top-color">About Me</h2>
              <div className="border-2 w-20 border-top-color my-3" />
              <p> {person.details} </p>
            </div>
            {/* Professional Experience */}
            <div className="py-3">
              <h2 className="text-lg font-poppins font-bold text-top-color">Professional Experience</h2>
              <div className="border-2 w-20 border-top-color my-3" />
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <p className="text-lg font-bold text-foreground">Experience</p>
                  <p className="font-semibold text-sm text-foreground">{person.experience} - Present</p>
                  <p className="font-semibold text-sm text-foreground mt-2 mb-1">Key Responsibilities</p>
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>Working on customer facing product</li>
                    <li>Deliverying highly efficient solutions</li>
                    <li>Solving critical bugs</li>
                  </ul>
                </div>
                {/* it will be all service  */}
                <div className="flex flex-col mt-8">
                  <p className="text-lg font-bold text-foreground">TailwindFlex.com | Lead</p>
                  <p className="font-semibold text-sm text-foreground">2020-2021</p>
                  <p className="font-semibold text-sm text-foreground mt-2 mb-1">Key Responsibilities</p>
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>Developed usable components</li>
                    <li>Solving complex problems</li>
                    <li>Solving critical bugs</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Post Link */}
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default ServiceProviderProfile;