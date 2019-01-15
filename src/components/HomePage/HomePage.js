import React, { Component } from "react";
import LazyHero from "react-lazy-hero";
import { Link } from "gatsby";
import { Grid, Item, Header } from "semantic-ui-react";

import CoookieCollector from "../Images/cookieCollector";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#F7F7F7" }}>
        <Header textAlign="center" style={{ margin: "0px 0px 40px", paddingTop: 25 }}>
          <LazyHero
            imageSrc="https://unsplash.it/2000/1000"
            parallaxOffset={100}
            opacity="0.4"
            style={{ overflow: "hidden" }}>
            <h1>LANHI ASSOCIATES</h1>
          </LazyHero>
        </Header>
        <Grid centered style={{ margin: "20px 0px 0px" }}>
          <Grid.Row style={{ margin: "0px 0px 100px" }}>
            <Grid.Column computer="4">
              <CoookieCollector />
              <Item className="homeContentContainer">
                <Item.Header className="homeContentTitle">Bookkeeping Services</Item.Header>
                <Item.Description className="homeContentDescription">
                  If you need help with your bookkeeping, we have you covered. We offer various
                  bookkeeping services that will meet your needs.
                </Item.Description>
                <Link to="/Services">
                  <Item.Extra>Learn More</Item.Extra>
                </Link>
              </Item>
            </Grid.Column>
            <Grid.Column computer="4">
              <CoookieCollector />
              <Item className="homeContentContainer">
                <Item.Header className="homeContentTitle">Your Taxes Matter</Item.Header>
                <Item.Description className="homeContentDescription">
                  Need help with your tax returns? We offer these services and will get the work
                  done for you. We’re dedicated to our clients and we've represented them in audits
                  with Federal and State taxing authorities. We take continuing education classes
                  throughout the year. This keeps us current on tax law so we’re always ready for
                  the toughest situations.
                </Item.Description>
              </Item>
            </Grid.Column>
            <Grid.Column computer="4">
              <CoookieCollector />
              <Item className="homeContentContainer">
                <Item.Header className="homeContentTitle">Your business matters</Item.Header>
                <Item.Description className="homeContentDescription">
                  We develop strategies for both business and individual clients. And we work hard
                  and long hours when they need us—even after tax season. So let us tackle your most
                  pressing financial issues.
                </Item.Description>
              </Item>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
