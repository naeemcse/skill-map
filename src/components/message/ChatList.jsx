"use client"
import React, {useEffect, useState} from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import Image from "next/image";
import Cookies from 'js-cookie';
import {jwtDecode} from "jwt-decode";
import ScrollableFeed from "react-scrollable-feed";


const ChatList = () => {
    const [userId, setUserId] = useState(null);
    const[conversations, setConversations] = useState([]);

    useEffect(() => {
        const token = Cookies.get('token'); // Replace 'token' with your cookie name
        if (token) {
            const decoded = jwtDecode(token);
            setUserId(decoded.id);

        }
        // Fetch the user profile of the receiver
        const fetchProfile = async (receiverId) => {
            try {
                let res = await (await fetch(`/api/serviceProvider/details?id=${receiverId}`)).json();
                return res.data;
            } catch (error) {
                console.log(error);
                return null;
            }
        };

        const fetchConversations = async () => {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'id': userId
                }
            }
            try {
                const res = await (await fetch('/api/message/allconversession', options)).json();
                const conversations = res.data;

                const updatedConversations = await Promise.all(conversations.map(async (conversation) => {
                  // for each conversation, fetch the profile of the other user
                    const tem = conversation.senderId !== userId ? conversation.receiverId : conversation.senderId;
                    const profileData = await fetchProfile(tem);
                    return {
                        ...conversation,
                        senderProfile: profileData
                    };
                }));

                setConversations(updatedConversations);
            } catch (error) {
                console.log(error);
            }
        };
        fetchConversations();
    }, []);

    return (
        <ScrollableFeed>
            <Card className="w-full min-h-[450px] max-h-screen">
                <CardHeader>
                    <CardTitle> All Message </CardTitle>
                    <CardDescription>Click one to send Message </CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <div className="grid w-full items-center gap-4">
                            {conversations.map(conversation => (
                                <Link href={`/message?receiverId=${conversation.senderProfile.id}&conversationId=${conversation.id}`} key={conversation.id}>
                                    <div className="border p-2 m-1 rounded flex items-center">
                                        <Image
                                            className="m-1 rounded-full"
                                            src={conversation.senderProfile.profilePhoto ||"/image/dummyUser.png"}
                                            alt="user image"
                                            width={30}
                                            height={30}
                                        />
                                        <div>
                                            <strong> {conversation.senderProfile.firstName}</strong>
                                            <p className="text-sm">{conversation.senderProfile ? conversation.senderProfile.email : 'No Email'}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">

                </CardFooter>
            </Card>
        </ScrollableFeed>
    );
};

export default ChatList;