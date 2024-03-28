import React from "react";
import {cookies} from "next/headers";
import UpdateUserProfile from "@/components/user/UpdateUserProfile"
 
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
    <UpdateUserProfile info={data['profile']}/>

    </>
  );
};

export default page;
