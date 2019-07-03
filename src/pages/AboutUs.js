import React from "react";
import { Grid, Item, Header } from "semantic-ui-react";
import Teamwork from "../components/Images/Teamwork";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import "../CSS/AboutUs.css";

const AboutUs = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Find out more about us!"
        keywords={[`gatsby`, `application`, `react`, `info`]}
      />
      <div style={{ backgroundColor: "#F7F7F7" }} className="AboutPage">
        <Grid
          style={{
            padding: "0px 0px 100px"
          }}
          centered>
          <Header
            textAlign="center"
            style={{ padding: "25px 0px 0px", fontSize: "2.25em", fontWeight: 400 }}>
            About Us
          </Header>
          <Grid.Row>
            <Grid.Column computer="7">
              <Teamwork />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="12">
              <Item.Group>
                <Item>
                  <Item.Content>
                    <Item.Description as="p">
                      Teraza Group is an experienced accounting firm providing small business and
                      individual accounting and tax services. With 18 years of accounting and tax
                      experience, our clients can rest assured that they will receive quality
                      services at affordable prices.
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Description as="p">
                      We are located in Mount Vernon, Washington and provide in-person service to
                      our clients at our office and virtually throughout the United States through
                      e-mail, DropBox, Skype and over the telephone. We also provide virtual
                      services to our military clients stationed all over the world
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Description as="p">
                      Our experienced QuickBooks Pro Advisors provide a wide range of services from
                      QuickBook Consulting to full charge bookkeeping services. Our services are
                      tailored to each client based up their needs, thus enabling them to do as much
                      or as little as they desire at a price they can afford. Regardless of the
                      services provided, we are an integral part of our client’s accounting and tax
                      matters. We are available extended weekday hours and offer Saturday
                      appointments. During our peak season (January - April), we are open seven days
                      per week.
                    </Item.Description>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Layout>
  );
};

export default AboutUs;
