import ServiceProvider from "@/components/service/ServiceProvider";
import React from "react";
import Link from "next/link"


async function getData(mapLocation,keyword) {
    let result = (
      await (
        await fetch(
           `${process.env.HOST}/api/serviceProvider/searchByMapLocation?keyword=${keyword}&location=${mapLocation}`
        )
      ).json()
    )["data"];
    return { result: result };
  }
  
// ${process.env.HOST}/api/serviceProvider/searchByMapLocation/?keyword=${keyword}&location=${mapLocation}

const page = async (props) => {
    let keyword = props.searchParams["keyword"];
    let mapLocation = props.searchParams["location"];
    const data = await getData(mapLocation,keyword);
    return (
        <div>
            Result for : {mapLocation} AND {keyword }
          <ServiceProvider people={data.result}/>
          
        </div>
    );
};

export default page;