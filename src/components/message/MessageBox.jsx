import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import { useAppContext } from "@/contex/contex";

const MessageBox = ({ messages}) => {
    const [userId] = useAppContext();
  //   userID is come from browser's cookies
  return (
    <ScrollableFeed>
        <div className="flex flex-col ">
      {messages ? (
        messages.map((item, i) => <div key={i} className={userId!==item.senderId?"bg-sky-300 p-1 rounded w-fit self-start m-1":"bg-green-300 p-1 rounded  w-fit self-end m-1"}>{item.content}</div>)
      ) : (
        <div>
          <p>No messages</p>
        </div>
      )}

</div>
    </ScrollableFeed>
  );
};

export default MessageBox;
