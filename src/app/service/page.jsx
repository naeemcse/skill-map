import PostSearchResult from '@/components/service/post/PostSearchResult';
import React from 'react';
import AllService from "@/components/service/post/AllService";

// async function getData() {
//     let result = (
//       await (
//         await fetch(`${process.env.HOST}/api/servicePost/allService`)
//       ).json()
//     )["data"];
//     return { result: result };
//   }
const page = async () => {
    // const data = await getData();

    return (
        <div>
                <h1 className="text-center"> All Service  </h1>
            <AllService/>
        </div>
    );
};

export default page;