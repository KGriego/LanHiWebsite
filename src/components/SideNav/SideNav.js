import { Link } from "gatsby";
import React, { Component } from "react";
import { Menu, Grid } from "semantic-ui-react";
import "./SideNav.css";

class SideNav extends Component {
  state = {};
  handleMenuState = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { hidden } = this.props;
    const { activeItem } = this.state;
    return (
      <div className={`sideNav ${hidden && "show-menu"}`}>
        <Grid style={{ marginBottom: 20 }}>
          <Menu size="huge" secondary vertical style={{ marginTop: 20 }}>
            <Link to="/">
              <Menu.Item
                as="div"
                name="home"
                active={activeItem === "home"}
                onClick={this.handleMenuState}
              />
            </Link>
            <Link to="/Services">
              <Menu.Item
                as="div"
                name="services"
                active={activeItem === "services"}
                onClick={this.handleMenuState}
              />
            </Link>
            <Link to="/Resources">
              <Menu.Item
                as="div"
                name="resources"
                active={activeItem === "resources"}
                onClick={this.handleMenuState}
              />
            </Link>
            <Link to="/AboutUs">
              <Menu.Item
                as="div"
                name="aboutUs"
                active={activeItem === "aboutUs"}
                onClick={this.handleMenuState}
              />
            </Link>
            <Link to="/ContactUs">
              <Menu.Item
                as="div"
                name="contactInfo"
                active={activeItem === "contactInfo"}
                onClick={this.handleMenuState}
              />
            </Link>
          </Menu>
        </Grid>
      </div>
    );
  }
}

export default SideNav;
