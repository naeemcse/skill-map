import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";

const prisma = new PrismaClient();

export async function POST(req, res) {
    try {
        let headerList = headers();
        let id = parseInt(headerList.get('id'));
        let reqBody = await req.json();

        reqBody.senderId = id;
        const { senderId, receiverId, content } = reqBody ;// req.body;

        if (!senderId || !receiverId || !content) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        // console.log(reqBody);
        // Check if a conversation already exists between the two users
        let conversation = await prisma.conversation.findFirst({
            where: {
                OR: [
                    { senderId, receiverId },
                    { senderId: receiverId, receiverId: senderId },
                ],
            },
        });
        // If no conversation exists, create a new one
        if (!conversation) {
            conversation = await prisma.conversation.create({
                data: {
                    senderId,
                    receiverId,
                    createdAt: new Date(),
                },
            });
        }
// Create the new message
        const message = await prisma.message.create({
            data: {
                content,
                senderId,
                receiverId,
                conversationId: conversation.id,
                sentAt: new Date(),
            },
        });

        // Update the lastMessage and lastMessageAt fields of the conversation
        await prisma.conversation.update({
            where: { id: conversation.id },
            data: {
                lastMessage: content,
                lastMessageAt: new Date(),
            },
        });
        // const result = await prisma.message.create({
        //     data: reqBody
        // });
        return NextResponse.json({ status: "success", data: message });
    } catch (e) {
        return NextResponse.json({ status: "fail", data: e });
    }
}