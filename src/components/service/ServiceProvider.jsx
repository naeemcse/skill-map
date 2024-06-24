import React from "react";
import { Button } from "@/components/ui/button";
import { MdWork } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import  Image from "next/image";
const ServiceProvider = (props) => {
  return (
    <div className="flex flex-wrap">
      {props.people.map((item, i) => {
        return (
          <div
            key={i}
            className="max-w-2xl mx-4 shadow-lg shadow-primary sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg---card shadow-xl rounded-lg text---card-foreground border-2 bordercard-foreground"
          >
            <div className="rounded-t-lg h-32 overflow-hidden">
              <Image
                className="object-cover object-top w-full"
                src="/image/coverphoto.jpg"
                alt={item.lastName}
                width={300}
                height={100}
              />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border--card-foreground rounded-full overflow-hidden">
              <img
                className="object-cover object-center w-32 h-32"
                src={ item.profilePhoto||  "/image/dummyUser.png"}
                alt={item.lastName}
                width={100}
                height={100}
              />
            </div>
            <div className="text-center mt-2">
              <h2 className="font-semibold">
                {" "}
                {item.firstName} {item.lastName}{" "}
              </h2>
              <p className="text-card-foreground">
                {" "}
                <MdWork className="text-sm m-0 inline-block" />{" "}
                {item.profession}
              </p>
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
                <div>{item.experience}</div>
              </li>
            </ul>
            <div className="p-4 border-t">
              <div>
                {" "}
                <IoLocationOutline className="inline -box" /> Service Location :{" "}
                <span className="bg-card">{item.upzillaName}</span>{" "}
                <span>{item.districtName}</span>
                <span>{item.divisionName}</span>
              </div>
            </div>
            <div className="p-4 border-t mx-8 mt-2 justify-between flex">
              <Link href="">
                <Link className="ml-1" href={`/message?receiverId=${item.id}`}>  <Button>Message</Button></Link>
              </Link>
              <Link href={`/serviceProvider/profile?id=${item.id}`}>
                <Button> Details </Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceProvider;
