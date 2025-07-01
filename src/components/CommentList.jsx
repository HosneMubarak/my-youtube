import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <div>
      <Comment key={comment.id} data={comment} />
      <div className="pl-5 border-l-1">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentList;
