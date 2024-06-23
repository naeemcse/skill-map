import React from 'react';
import ScrollableFeed from 'react-scrollable-feed'

const MessageBox = ({messages}) => {
    const items = ['Item 1', 'Item 2','Item 1', 'Item 2','Item 1', 'Item 2','Item 1', 'Item 2','Item 1', 'Item 2','Item 1', 'Item 2'];
    return (
        <ScrollableFeed>
        {messages.map((item, i) => <div key={i}>{item.content}</div>)}
      </ScrollableFeed>
    );
};

export default MessageBox;