import { Link } from "gatsby";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Menu, Grid, Item, Divider, Icon } from "semantic-ui-react";
import "./header.css";
import SideNav from "../SideNav";

class Header extends Component {
  state = {
    hidden: false,
    WindowSize: 400
  };
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.addEventListener("resize", null);
  }
  handleMenuState = (e, { name }) => this.setState({ activeItem: name });
  openMenu = e => {
    e.preventDefault();
    this.setState({ hidden: !this.state.hidden });
  };
  handleResize = () => {
    this.setState({ WindowSize: window.innerWidth });
  };
  render() {
    const { activeItem, hidden, WindowSize } = this.state;
    const { siteTitle } = this.props;
    let mobile;
    if (WindowSize >= 780) {
      mobile = false;
    } else {
      mobile = true;
    }
    return (
      <Grid style={{ marginBottom: 20 }} className={"navigation"}>
        <Grid.Row className={"noPadding"}>
          <Grid.Column computer="2" tablet="1">
            {" "}
          </Grid.Column>
          <Grid.Column computer="4" tablet="11">
            <Item.Group>
              <Item style={{ margin: 20 }}>
                <Item.Content>
                  <Link to="/">
                    <Item.Header as="h1">{siteTitle}</Item.Header>
                  </Link>
                  <Item.Description style={{ margin: 0 }}>
                    Accounting & Tax Professionals
                  </Item.Description>
                  <Item.Description style={{ margin: 0 }}>
                    (360)-420-3387
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
        </Grid.Row>
        <Divider style={{ margin: ".5rem 0rem" }} />
        <Grid.Row centered style={{ padding: 0 }}>
          <Menu secondary className={mobile ? "show" : "hidden"}>
            <Menu.Item>
              <Icon onClick={this.openMenu} name="bars" />
            </Menu.Item>
          </Menu>
        </Grid.Row>
        <Grid.Row
          centered
          style={{ padding: 0 }}
          className={mobile ? "hidden" : "show"}
        >
          <Menu size="huge" secondary>
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
        </Grid.Row>
        {hidden && (
          <SideNav
            hidden={hidden}
            handleMenuState={this.handleMenuState}
            activeItem={activeItem}
          />
        )}
      </Grid>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
