import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeToggle } from "../utils/appSlice";
import { YT_SEARCH_SUG_API } from "../utils/constants";
import { addSearchCache } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestQueryList, setSuggestQueryList] = useState([]);
  const [showSuggestQuery, setShowSuggestQuery] = useState(false);

  const getSearchQuerySuggetion = async (searchQuery) => {
    if (!searchCache[searchQuery]) {
      const data = await fetch(YT_SEARCH_SUG_API + searchQuery);
      const json = await data.json();
      setSuggestQueryList(json[1]);
      dispatch(addSearchCache({ [searchQuery]: json[1] }));
      console.log("Api Call");
    } else {
      setSuggestQueryList(searchCache[searchQuery]);
    }
  };

  useEffect(() => {
    const time = setTimeout(() => getSearchQuerySuggetion(searchQuery), 200);
    return () => clearTimeout(time);
  }, [searchQuery]);

  const handleToggle = () => {
    dispatch(changeToggle());
  };
  const handleSuggesrQuery = (query) => {
    setSearchQuery(query);
    setShowSuggestQuery(false);
    console.log("You clicked on:", query);
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
        <div>
          <input
            value={searchQuery}
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestQuery(true)}
            onBlur={() => setTimeout(() => setShowSuggestQuery(false), 100)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full">
            Search
          </button>
        </div>
        {showSuggestQuery && (
          <div className="absolute bg-white px-2 py-2 rounded-lg shadow w-[29em]">
            <ul>
              {suggestQueryList.map((s) => (
                <li
                  className="px-2 py-1 hover:bg-gray-300 cursor-pointer"
                  key={s}
                  onClick={() => handleSuggesrQuery(s)}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
