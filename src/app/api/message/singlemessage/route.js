import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, res) {
    try {
        let {searchParams} = new URL(req.url) ;
        let conversationId = (searchParams.get('id')) ;

        // Fetch all messages for the given conversation
        const messages = await prisma.message.findMany({
            where: { conversationId: parseInt(conversationId) },
            orderBy: { sentAt: 'asc' }, // Order messages by sentAt timestamp
        });

        return NextResponse.json({ status: "success", data: messages });
    } catch (e) {
        return NextResponse.json({ status: "fail", data: e });
    }
}