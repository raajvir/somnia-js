import React from "react";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu" id="menu">
        <MenuLeft></MenuLeft>
        <MenuRight></MenuRight>
      </div>
    );
  }
}

export default Menu;
