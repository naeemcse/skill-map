import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function GET(req, res) {
try{
    // const reqBody = await req.json();
    let {searchParams} = new URL(req.url) ;
    let keyword = (searchParams.get('keyword')) ;
    let divisionName = (searchParams.get('divisionName')) ;
    let  districtName = (searchParams.get('districtName')) ;
    let upzillaName = (searchParams.get('upzillaName')) ;

    const prisma = new PrismaClient();
    // here will be a search query for the service post 
    const result = await prisma.users.findMany({
        where: {
          OR: [
            {
              divisionName: divisionName,
              districtName: districtName,
              upzillaName: upzillaName,
              profession: { contains: keyword },
            },
            {
              upzillaName: { contains: upzillaName }
            },
            {
                profession:{contains:keyword}
            }
          ]
        }
      });
      
     return NextResponse.json({ status: "success", data:result });
    }

 catch (err) {
    return NextResponse.json({ status: "fail", data: err });
  }
}

