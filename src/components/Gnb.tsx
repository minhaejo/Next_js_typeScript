import React from "react";
import { Menu } from "semantic-ui-react";

const Gnb = () => {
  let activeItem = "home";
  return (
    <div>
      <Menu inverted>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          //   onClick={this.handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          //   onClick={this.handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          //   onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item></Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            // onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Gnb;
