"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { EyeIcon } from "lucide-react";
import React, { useEffect,useState } from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import  Image from "next/image"
import Link from "next/link";
const ProfileReceiver = ({receiverId}) => {
    const [receiverData, setReceiverData] = useState([]);

    useEffect( () => {
        // Fetch the user profile of the receiver
        const fetchProfile = async (receiverId) => {
            try {
                let res = await (await fetch(`/api/serviceProvider/details?id=${receiverId}`)).json();
                setReceiverData(res.data);
              // console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProfile(receiverId);

    }, []) ;

    return (
        <> 
           <CardTitle>
            {receiverData.firstName} {receiverData.lastName}
            <Popover>
                <PopoverTrigger><EyeIcon className="inline m-1" size={20} /></PopoverTrigger>
                <PopoverContent>
                    <div className="text-center mx-auto flex flex-col">
                        <Image className="self-center rounded-full" src={receiverData.profilePhoto || ""} alt="profile"
                               height={100} width={100}/>
                        <div> Division: {receiverData.divisionName} </div>
                        <div> Profession:{receiverData.profession} </div>
                        <div> Mobile:{receiverData.mobile} </div>
                        <Link href={`/serviceProvider/profile?id=${receiverData.id}`}> Details </Link>
                    </div>

                </PopoverContent>
            </Popover>
        </CardTitle>
        </>
    );
};

export default ProfileReceiver;