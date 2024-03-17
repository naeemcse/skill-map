import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
export async function GET(req, res) {
  try {
    let headerList = headers();
    let id = parseInt(headerList.get("id"));

    const prisma = new PrismaClient();
    const result = await prisma.service.findMany({
      where: { userID: id },
      include: {
        serviceProvider: {
          select: {
            id: true,
            firstName: true,
            profession: true,
          },
        },
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

export async function POST(req, res) {
  try {
    let headerList = headers();
    let id = parseInt(headerList.get("id"));

    let reqBody = await req.json();
    reqBody.userID = id;

    const prisma = new PrismaClient();
    const result = await prisma.service.create({
      data: reqBody,
      // serviceCategory: {
      //  create: {
      //   serviceCategoryName:reqBody.serviceCategoryName ,
      // },
    // }
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

export async function DELETE(req, res) {
  try {
    let headerList = headers();
    let userIdReviwer = parseInt(headerList.get("id"));

    let reqBody = await req.json();
    let profileReviews_id = parseInt(reqBody.id);
    const prisma = new PrismaClient();
    const result = await prisma.profileReviews.deleteMany({
      where: {
        AND: [{userIdReviwer:userIdReviwer }, { id: profileReviews_id }],
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
