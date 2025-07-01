import React from "react";

const Comment = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="flex shadow mt-2">
      <img
        className="w-12 h-12"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OD1jGOrDGvKMyPnUg2OK7UZD6sejCvRkPg&s"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p className="">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
