import React from "react";
import AudioSrc from "./AudioSrc";

class Audio extends React.Component {
  render() {
    return (
      <audio tabIndex={0} id="music" preload="auto" loop>
        <AudioSrc />
      </audio>
    );
  }
}

export default Audio;
