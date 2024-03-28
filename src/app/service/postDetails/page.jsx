import ServiceProviderProfile from '@/components/service/ServiceProviderProfile';
import React from 'react';
import PostDetails from '@/components/service/post/PostDetails'

async function getData(id) {
    let result = (
      await (
        await fetch(
           `${process.env.HOST}/api/servicePost/seviceDetails/?sereviceID=${id}`
        )
      ).json()
    )["data"];
    return { result: result };
  }
const page = async (props)=> {
    let id = props.searchParams["id"];
    const data = await getData(id);
    return (
        <div>
          <h3 className="text-center"> Service Details Page  </h3>
           <PostDetails service={data.result}/>
        </div>
    );
};

export default page;