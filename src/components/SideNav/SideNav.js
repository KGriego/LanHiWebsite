import { Link } from "gatsby";
import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "./SideNav.css";

class SideNav extends Component {
  render() {
    const { hidden, handleMenuState, activeItem } = this.props;
    return (
      <div className={`sideNav ${hidden && "show-menu"}`}>
        <Menu size="huge" secondary vertical style={{ marginTop: 20 }}>
          <Link to="/">
            <Menu.Item
              as="div"
              name="home"
              active={activeItem === "home"}
              onClick={handleMenuState}
            />
          </Link>
          <Link to="/Services">
            <Menu.Item
              as="div"
              name="services"
              active={activeItem === "services"}
              onClick={handleMenuState}
            />
          </Link>
          <Link to="/Resources">
            <Menu.Item
              as="div"
              name="resources"
              active={activeItem === "resources"}
              onClick={handleMenuState}
            />
          </Link>
          <Link to="/AboutUs">
            <Menu.Item
              as="div"
              name="aboutUs"
              active={activeItem === "aboutUs"}
              onClick={handleMenuState}
            />
          </Link>
          <Link to="/ContactUs">
            <Menu.Item
              as="div"
              name="contactInfo"
              active={activeItem === "contactInfo"}
              onClick={handleMenuState}
            />
          </Link>
        </Menu>
      </div>
    );
  }
}

export default SideNav;
