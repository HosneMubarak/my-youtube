import React, { useEffect, useState } from "react";
import VideoCard, { AdVideoCard } from "./videoCard";
import { YT_API_URL } from "../utils/constants";
import { Link } from "react-router";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getYoutubeVideos = async () => {
    try {
      const response = await fetch(YT_API_URL);
      const json = await response.json();
      setVideos(json.items);
    } catch (error) {
      console.error("Failed to fetch videos:", error);
    }
  };

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  if (videos.length === 0) return null;
  return (
    <div className="flex flex-wrap px-3">
      <AdVideoCard info={videos[0]} />
      {videos.map((video) => (
        <Link key={video.id} to={"watch" + "?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
