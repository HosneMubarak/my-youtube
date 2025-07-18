import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="col-span-11">
      <div>
        <ButtonList />
      </div>
      <div>
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
