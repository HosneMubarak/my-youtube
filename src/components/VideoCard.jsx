import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-80 shadow-lg rounded-lg">
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt="thumbnails"
      />
      <ul>
        <li className="font-bold"> {title}</li>
        <li> {channelTitle}</li>
        <li> {statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-500">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
