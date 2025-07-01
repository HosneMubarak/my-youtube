import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenue } from "../utils/appSlice";
import { useSearchParams } from "react-router";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import { addChat } from "../utils/chatSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");
  const [liveMessage, setLiveMessage] = useState(null);

  useEffect(() => {
    dispatch(closeMenue());
  }, []);

  return (
    <div className="col-span-11 px-5">
      <div className="flex">
        <div>
          {" "}
          <iframe
            width="800"
            height="400"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="px-2 w-full bg-gray-100 border h-[400px] overflow-y-scroll flex-col-reverse">
          <LiveChat />
          <div>
            <form
              className="flex"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  addChat({ name: "Hosne Mubarak", message: liveMessage })
                );
                setLiveMessage("");
              }}
            >
              <input
                value={liveMessage}
                type="text"
                onChange={(e) => setLiveMessage(e.target.value)}
              />
              <button className="border-t-cyan-500">Send</button>
            </form>
          </div>
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
