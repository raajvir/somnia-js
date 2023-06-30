import React from "react";
import RestartIco from "./RestartIco";

class RestartBtn extends React.Component {
  render() {
    return (
      <div className="sqq_btn outline" role="button" onclick="restart()">
        <RestartIco />
      </div>
    );
  }
}

export default RestartBtn;
