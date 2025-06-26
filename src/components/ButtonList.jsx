import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const btnList = [
    "All",
    "React routers",
    "Web Development",
    "News",
    "Bangladesh Cricket",
    "Podcasts",
    "Test Cricket",
    "Music",
    "Live",
  ];
  return (
    <div>
      {btnList.map((btn, i) => (
        <Button key={i} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
