import ServiceProviderProfile from '@/components/service/ServiceProviderProfile';
import React from 'react';

async function getData(id) {
    let result = (
      await (
        await fetch(
           `${process.env.HOST}/api/serviceProvider/details?id=${id}`
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
            <ServiceProviderProfile person={data.result}/>
        </div>
    );
};

export default page;