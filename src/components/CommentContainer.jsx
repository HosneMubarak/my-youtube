import React from "react";
import Comment from "./Comment";
import CommentList from "./commentList";

const commentsData = [
  {
    id: 1,
    name: "Hosne Mubarak",
    comment: "Lorem ipsum dolor sit.",
    replies: [
      {
        id: 2,
        name: "Hosne Mubarak",
        comment: "Lorem ipsum dolor sit.",
        replies: [
          {
            id: 3,
            name: "Hosne Mubarak",
            comment: "Lorem ipsum dolor sit.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Tasmir Rahman",
    comment: "This is a top-level comment.",
    replies: [
      {
        id: 5,
        name: "Mahiya Mahi",
        comment: "Replying to Tasmir. Interesting point!",
        replies: [
          {
            id: 6,
            name: "Tasmir Rahman",
            comment: "Thanks Mahiya. Appreciate it.",
            replies: [],
          },
        ],
      },
      {
        id: 7,
        name: "Nur Nabi",
        comment: "Can you explain more?",
        replies: [],
      },
    ],
  },
  {
    id: 8,
    name: "Fahim Ahmed",
    comment: "Great discussion going on here!",
    replies: [],
  },
  {
    id: 9,
    name: "Raihanul Haque",
    comment: "I disagree with the above point.",
    replies: [
      {
        id: 10,
        name: "Fahim Ahmed",
        comment: "Fair enough. Can you clarify why?",
        replies: [
          {
            id: 11,
            name: "Raihanul Haque",
            comment:
              "Sure, I believe there's a misunderstanding about the topic.",
            replies: [],
          },
        ],
      },
    ],
  },
];

const CommentContainer = () => {
  return (
    <div className="col-span-12 p-2 m-5">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
