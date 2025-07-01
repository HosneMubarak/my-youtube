import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center">
      <img
        className="h-8 px-2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OD1jGOrDGvKMyPnUg2OK7UZD6sejCvRkPg&s"
        alt="user logo"
      />
      <span className="px-2 font-bold">{name}</span>
      <span className="px-2">{message}</span>
    </div>
  );
};

export default ChatMessage;
