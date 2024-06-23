import ChatList from "@/components/message/ChatList";
import MessageBody from "@/components/message/MessageBody";
import React from "react";

const page = ({searchParams}) => {
    const { reciverId } = searchParams;
  
  return (
    <>
    <div className="flex justify-center"> 
      <div className="grid grid-cols-12 gap-1 justify-center">
        <div className="col-span-3">
          <ChatList />
        </div>
        <div className="col-span-9">
          <MessageBody reciverId={reciverId} />
        </div>
        
      </div>
      </div>
    </>
  );
};

export default page;
