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
                        <List.Description as="a" href="mailto:office@lanhiassociates.com">
                          office@lanhiassociates.com
                        </List.Description>
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
                    <List.Item>
                      <Link to="/">
                        <List.Header as="h3" className="footerNav">
                          Home
                        </List.Header>
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link to="/Services">
                        <List.Content>
                          <List.Header as="h3" className="footerNav">
                            Services
                          </List.Header>
                        </List.Content>
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link to="/Resources">
                        <List.Content>
                          <List.Header as="h3" className="footerNav">
                            Resources
                          </List.Header>
                        </List.Content>
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link to="/AboutUs">
                        <List.Content>
                          <List.Header as="h3" className="footerNav">
                            About Us
                          </List.Header>
                        </List.Content>
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link to="/ContactUs">
                        <List.Content>
                          <List.Header as="h3" className="footerNav">
                            Contact Us
                          </List.Header>
                        </List.Content>
                      </Link>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        <Grid centered>
          <Grid.Row>
            <List horizontal divided style={{ lineHeight: 1, fontSize: "1em", margin: 50 }}>
              <List.Item style={{ lineHeight: 1.3 }}>
                <List.Content>
                  <List.Description className="copyRight" as="p">
                    Copyright &#169; 2019 {this.props.siteTitle}. All rights reserved.
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a" href="/ContactUs">
                <List.Content>
                  <List.Description className="copyRight" as="p">
                    Contact Us
                  </List.Description>
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
