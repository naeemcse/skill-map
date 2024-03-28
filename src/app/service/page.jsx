import PostSearchResult from '@/components/service/post/PostSearchResult';
import React from 'react';

async function getData() {
    let result = (
      await (
        await fetch(`${process.env.HOST}/api/servicePost/allService`)
      ).json()
    )["data"];
    return { result: result };
  }
const page = async () => {
    const data = await getData();

    return (
        <div>
                <h1> All Service  </h1> 
              <PostSearchResult service={data.result}/>
        </div>
    );
};

export default page;