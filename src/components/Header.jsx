import React from "react";
import { useDispatch } from "react-redux";
import { changeToggle } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(changeToggle());
  };
  return (
    <div className="grid grid-flow-col p-5 m-3 shadow-lg ">
      <div className="flex col-span-1">
        <img
          onClick={() => handleToggle()}
          className="h-8 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="menue"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            src="https://w7.pngwing.com/pngs/24/227/png-transparent-youtube-logo-youtube-text-trademark-logo.png"
            alt="youtube logo"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8 px-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OD1jGOrDGvKMyPnUg2OK7UZD6sejCvRkPg&s"
          alt="user logo"
        />
      </div>
    </div>
  );
};

export default Header;
