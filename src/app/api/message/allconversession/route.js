import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";

const prisma = new PrismaClient();

export async function GET(req, res) {
    try {
        let headerList = headers();
        let id = parseInt(headerList.get('id'));

        // Fetch all messages for the given conversation
        const messages = await prisma.conversation.findMany({
            where: {
                OR: [
                    { senderId: id},{ receiverId: id },
                ],
            },
        });

        return NextResponse.json({ status: "success", data: messages });
    } catch (e) {
        return NextResponse.json({ status: "fail", data: e });
    }
}