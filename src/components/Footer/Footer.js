import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import { Grid, List, Segment, Header, Container } from "semantic-ui-react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <>
        <Segment vertical className="footer">
          <Container style={{ margin: 40 }}>
            <Grid columns={2} divided stackable>
              <Grid.Row>
                <Grid.Column>
                  <Header as="h2" content="Contact Us" />
                  <List>
                    <List.Item>
                      <List.Content>
                        <List.Header>Email</List.Header>
                        <List.Description>office@lanhiassociates.com</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Phone</List.Header>
                        <List.Description>(360)-420-3387</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Fax</List.Header>
                        <List.Description>(360)-335-6869</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Address</List.Header>
                        <List.Description>
                          608 S. 1st Street, Suite 209, Mount Vernon WA 98273
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header
                    style={{ fontFamily: "Merienda", fontSize: "2em" }}
                    as="h2"
                    content="Navigation Menu"
                  />
                  <List inverted bulleted>
                    <Link to="/">
                      <List.Item content="Home" />
                    </Link>
                    <Link to="/Services">
                      <List.Item content="Services" />
                    </Link>
                    <Link to="/Resources">
                      <List.Item content="Resources" />
                    </Link>
                    <Link to="/AboutUs">
                      <List.Item content="About Us" />
                    </Link>
                    <Link to="/ContactUs">
                      <List.Item content="Contact Info" />
                    </Link>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        <Grid centered>
          <Grid.Row>
            <List horizontal divided style={{ lineHeight: 1, fontSize: "2em", margin: 50 }}>
              <List.Item style={{ lineHeight: 1.3 }}>
                <List.Content>
                  <List.Description>
                    Copyright &#169; 2019 {this.props.siteTitle}. All rights reserved.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a" href="#">
                <List.Content>
                  <List.Description>Site Map</List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a" href="/ContactUs">
                <List.Content>
                  <List.Description>Contact Us</List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a" href="#">
                <List.Content>
                  <List.Description>Terms and Conditions</List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a" href="#">
                <List.Content>
                  <List.Description>Privacy Policy</List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

Footer.propTypes = {
  siteTitle: PropTypes.string
};

Footer.defaultProps = {
  siteTitle: ``
};

export default Footer;
