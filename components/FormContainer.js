import React from "react";
import Heading from "./Heading";
import ButtonCont from "./ButtonCont";

class FormContainer extends React.Component {
  render() {
    return (
      <div id="container" className="disappear">
        <Heading></Heading>
        <ButtonCont></ButtonCont>
      </div>
    );
  }
}

export default FormContainer;
