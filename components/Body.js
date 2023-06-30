import React from "react";
import FormContainer from "./FormContainer";
import Instructions from "./Instructions";
import Circle from "./Circle";
import Menu from "./Menu";
import Audio from "./Audio";
import OutC from "./OutC";

class Body extends React.Component {
  render() {
    return (
      <div>
        <FormContainer></FormContainer>
        <Instructions></Instructions>
        <Circle />
        <Menu></Menu>
        <Audio></Audio>
        <OutC />
        {}
      </div>
    );
  }
}

export default Body;
