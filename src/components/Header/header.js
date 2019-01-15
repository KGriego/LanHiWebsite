import { Link } from "gatsby";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Menu, Grid, Item, Divider } from "semantic-ui-react";
import "./header.css";

class Header extends Component {
  state = {};
  handleMenuState = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    const { siteTitle } = this.props;
    return (
      <Grid style={{ marginBottom: 20 }}>
        <Grid.Row style={{ padding: 0 }}>
          <Grid.Column computer="2" tablet="1"> </Grid.Column>
          <Grid.Column computer="4" tablet="11">
            <Item.Group>
              <Item style={{ margin: 20 }}>
                <Item.Content>
                  <Item.Header>{siteTitle}</Item.Header>
                  <Item.Description style={{ margin: 0 }}>
                    Accounting & Tax Professionals
                  </Item.Description>
                  <Item.Description style={{ margin: 0 }}>(360)-420-3387</Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
        </Grid.Row>
        <Divider style={{ margin: ".5rem 0rem" }} />
        <Grid.Row centered style={{ padding: 0 }}>
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
            <Link to="/Contact">
              <Menu.Item
                as="div"
                name="contactInfo"
                active={activeItem === "contactInfo"}
                onClick={this.handleMenuState}
              />
            </Link>
          </Menu>
        </Grid.Row>
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
