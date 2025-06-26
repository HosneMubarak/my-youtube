import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenue } from "../utils/appSlice";
import { useSearchParams } from "react-router";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");
  useEffect(() => {
    dispatch(closeMenue());
  }, []);
  return (
    <div className="col-span-11 px-5">
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
  );
};

export default WatchPage;
