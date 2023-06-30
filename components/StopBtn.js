import React from "react";
import StopIco from "./StopIco";

class StopBtn extends React.Component {
  render() {
    return (
      <div className="sqq_btn" role="button" onclick="endAll()">
        <StopIco />
      </div>
    );
  }
}

export default StopBtn;
