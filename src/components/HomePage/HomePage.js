import React, { Component } from "react";
import { Link } from "gatsby";
import { Grid, Item, Header, Divider } from "semantic-ui-react";

import FilingTaxes from "../Images/FilingTaxes";
import MoneyImage from "../Images/MoneyImage";
import PenImage from "../Images/PenImage";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#F7F7F7" }} className={"homePage"}>
        <Grid centered style={{ margin: "20px 0px 0px" }}>
          <Grid.Row style={{ margin: "0px 0px 50px" }}>
            <Grid.Column computer={"14"}>
              <Divider horizontal>
                <div className={"hero"}>
                  <Header textAlign="center" style={{ padding: 15 }}>
                    <h1 className={"title"}>Teraza Group</h1>
                  </Header>
                </div>
              </Divider>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid centered style={{ margin: "20px 0px 0px" }}>
          <Grid.Row style={{ margin: "0px 0px 50px" }}>
            <Grid.Column
              computer="5"
              tablet="12"
              mobile="12"
              className="someMarginBototm"
            >
              <FilingTaxes />
              <Item className="homeContentContainer">
                <Item.Header as="h3" className="homeContentTitle">
                  Bookkeeping Services
                </Item.Header>
                <Item.Description as="p" className="homeContentDescription">
                  If you need help with your bookkeeping, we have you covered.
                  We offer various bookkeeping services that will meet your
                  needs.
                </Item.Description>
                <Link to="/Services">
                  <Item.Extra>Learn More</Item.Extra>
                </Link>
              </Item>
            </Grid.Column>
            <Grid.Column computer="5" tablet="12" className="someMarginBototm">
              <MoneyImage />
              <Item className="homeContentContainer">
                <Item.Header as="h3" className="homeContentTitle">
                  Your Taxes Matter
                </Item.Header>
                <Item.Description as="p" className="homeContentDescription">
                  Need help with your tax returns? We offer these services and
                  will get the work done for you. We’re dedicated to our clients
                  and we've represented them in audits with Federal and State
                  taxing authorities. We take continuing education classes
                  throughout the year. This keeps us current on tax law so we’re
                  always ready for the toughest situations.
                </Item.Description>
              </Item>
            </Grid.Column>
            <Grid.Column computer="5" tablet="12" className="someMarginBototm">
              <PenImage />
              <Item className="homeContentContainer">
                <Item.Header as="h3" className="homeContentTitle">
                  Your business matters
                </Item.Header>
                <Item.Description as="p" className="homeContentDescription">
                  We develop strategies for both business and individual
                  clients. And we work hard and long hours when they need
                  us—even after tax season. So let us tackle your most pressing
                  financial issues.
                </Item.Description>
              </Item>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
