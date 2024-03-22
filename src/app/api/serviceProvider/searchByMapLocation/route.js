import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function GET(req, res) {
  try {
    // const reqBody = await req.json();
    let { searchParams } = new URL(req.url);
    let keyword = searchParams.get("keyword");
    let location = searchParams.get("location");

    // Split the location string
    const locationArray = location.split(", ");
    // remove last element from the array which is "Bangladesh"
    // locationArray.pop();
    const matchedUsers = [];
    const prisma = new PrismaClient();

    // const result = await prisma.users.findMany({
    //     where: {
    //         profession: {
    //             contains: keyword,
    //           }
    //         }
    //     },);

    //     matchedUsers.push(result);

    for (const loc of locationArray) {
      const result1 = await prisma.users.findMany({
        where: {
            OR:[
            {
              location: { contains: loc },
              profession: {
                contains: keyword,
              },
             
            }, 
            {profession: {
                contains: keyword,
              },}
            ],
         
          },
          // here will be a search query for the service post
        
      });
      matchedUsers.push(...result1);
    }

    // Remove duplicate users from the matchedUsers array
    const uniqueUsers = matchedUsers.filter(
      (user, index, self) => index === self.findIndex((t) => t.id === user.id)
    );

    return NextResponse.json({
      status: "success",
      data: uniqueUsers,
      location: location,
      keyword: keyword,
         });
  } catch (err) {
    return NextResponse.json({ status: "fail", data: err });
  }
}
