import ServiceProvider from "@/components/service/ServiceProvider";
import React from "react";
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

async function getData(division, district, upzilla, keyword) {
  let result = (
    await (
      await fetch(
        `${process.env.HOST}/api/serviceProvider/search/?divisionName=${division}&districtName=${district}&upzillaName=${upzilla}&keyword=${keyword}`
      )
    ).json()
  )["data"];
  return { result: result };
}

const page = async (props) => {
  let keyword = props.searchParams["keyword"];
  let divisionName = props.searchParams["divisionName"];
  let districtName = props.searchParams["districtName"];
  let upzillaName = props.searchParams["upzillaName"];
  const data = await getData(divisionName, districtName, upzillaName, keyword);
  return (
    <div> <span> Result for :  </span>
      <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/"> {divisionName} </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/"> {districtName} </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/"> {upzillaName} </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/"> {keyword} </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
      
      {/* {data.result.map((item, i) => {
        return (
          <>
            <p key={i}> {item.firstName} </p>
            <h1> {item.profession} </h1>
          </>
        );
      })} */}
      <ServiceProvider people={data.result}/>
    </div>
  );
};

export default page;
