import React from "react";
import {cookies} from "next/headers";
import UserProfile from "@/components/user/UserProfile"
 
async function getData(cookies) {
    let option={method: 'GET', headers: {'Cookie': cookies}, cache: 'no-store'}
    let profile = (await (await fetch(`${process.env.HOST}/api/user/profile/details`,option)).json())['data'];
    return { profile: profile };
}

const page = async () => {
    const cookieStore = cookies()
    let data=await getData(cookieStore);
  return (
    <>
    <UserProfile info={data['profile']}/>

    </>
  );
};

export default page;
