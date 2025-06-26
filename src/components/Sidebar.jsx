import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Sidebar = () => {
  const isToggleOpen = useSelector((store) => store.app.isToggleOpen);
  if (!isToggleOpen) return null;
  return (
    <div className="col-span-1 p-5 shadow">
      <ul>
        <li>
          <Link
            to={{
              pathname: "/",
            }}
          >
            Home
          </Link>
        </li>
        <li>Music</li>
        <li>Sports</li>
        <li>Gamming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gamming</li>
        <li>Movies</li>
      </ul>
      <h1 className=" font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gamming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
