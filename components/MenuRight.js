import React from "react";
import RestartBtn from "./RestartBtn";
import StopBtn from "./StopBtn";

class MenuRight extends React.Component {
  render() {
    return (
      <div className="right">
        <RestartBtn></RestartBtn>
        <StopBtn></StopBtn>
      </div>
    );
  }
}

export default MenuRight;
