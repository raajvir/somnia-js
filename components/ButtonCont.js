import React from "react";
import TenBtn from "./TenBtn";
import TwentyBtn from "./TwentyBtn";

class ButtonCont extends React.Component {
  render() {
    return (
      <div className="buttons">
        <TenBtn></TenBtn>
        <TwentyBtn></TwentyBtn>
      </div>
    );
  }
}

export default ButtonCont;
