import React, { Component } from "react";
import { Link } from "gatsby";
import { Grid, Header, List, Item, Button } from "semantic-ui-react";
import Chirpy from "../Images/Chirpy";
import "./ServicesLayout.css";

export default class ServicesLayout extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#F7F7F7" }}>
        <Header textAlign="center">Services</Header>
        <Grid centered style={{ margin: "20px 0px 0px" }}>
          <Grid.Row>
            <Grid.Column computer="4" tablet="12">
              <Chirpy />
            </Grid.Column>
            <Grid.Column computer="8" tablet="12">
              <Item>
                <Item.Description className="servicesDescription">
                  We provide a flexible pricing model which means you will know and agree to our fee
                  prior to us beginning work or you making a commitment. We customize our services
                  based on your needs. This comes down to the time it will take us to prepare,
                  review and finalize the return or project based on the complexity of the services
                  needed. We require 50% of the fee prior to beginning tax preparation work and the
                  balance when we provide you with a draft. We DO NOT offer refund anticipation
                  loans at this time. For consulting services, we require payment at the time of
                  your scheduled consultation. For ongoing accounting services, we offer affordable
                  packages and bill on a monthly basis.
                </Item.Description>
              </Item>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Item.Group className="beforeHand">
              <Item className="beforeHandContent">
                <Item.Header>We offer 10% Military Discount & Bundled Pricing</Item.Header>
              </Item>
              <Item className="beforeHandContent">
                <Item.Header>50% OF FEE IS DUE PRIOR TO WORK BEGINNING.</Item.Header>
              </Item>
              <Item className="beforeHandContent">
                <Item.Header>
                  BALANCE IS DUE WHEN DRAFT IS PROVIDED. FINAL COPY AND E-FILING WILL NOT BE
                  PROVIDED UNTIL BALANCE IS PAID.
                </Item.Header>
              </Item>
            </Item.Group>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="6" tablet="12">
              <Header textAlign="center">Hourly Services</Header>
              <List verticalAlign="middle" className="marginTop">
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Description>IRS Resolution & Audit Support</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Description>Federal or State Correspondence</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Description>Hourly Bookkeeping Services</List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column computer="6" tablet="12">
              <Header textAlign="center">New Business Set Up</Header>
              <List verticalAlign="middle" className="marginTop">
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Description>Articles of Organization or Incorporation</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Description>Tax Identification Number</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Description>S-Corporation Election</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Description>New Quickbooks Set-Up</List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="12">
              <Header textAlign="center">Book Keeping Services</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="6" tablet="12">
              <List verticalAlign="middle">
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Description>Monthly/Quarterly Bookkeeping Services</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Description>
                      Quarterly Quickbooks Review and Reconciliation
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Description>
                      Annual Quickbooks Review and Reconcilliation
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column computer="6" tablet="12">
              <List verticalAlign="middle" style={{ marginTop: 5 }}>
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Description>Quarterly Financial Statement Preparation</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Description>Annual Financial Statement Preparation</List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="12">
              <Header textAlign="center">Tax Return Preparation & Filing</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="6" tablet="12">
              <List verticalAlign="middle">
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Header>Personal Federal Income Tax Preparation</List.Header>
                    <List.List>
                      <List.Item>
                        <List.Content>
                          <List.Description>
                            1040 return and related statements, including cost of e-filing or
                            mailing
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Header>Personal Federal AMENDED Income Tax Preparation</List.Header>
                    <List.List>
                      <List.Item>
                        <List.Content>
                          <List.Description>
                            Amended 1040 return and related statements, including cost of mailing
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Header>Personal State Income Tax Preparation</List.Header>
                    <List.List>
                      <List.Item>
                        <List.Content>
                          <List.Description>
                            Return and all related forms, including cost of e-filing or mailing
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Header>Business Federal Income Tax Preparation</List.Header>
                    <List.List>
                      <List.Item>
                        <List.Content>
                          <List.Description>
                            1120, 1120s, 1065 and all related forms, including cost of e-filing or
                            mailing
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Header>Business State Income Tax Preparation</List.Header>
                    <List.List>
                      <List.Item>
                        <List.Content>
                          <List.Description>
                            Return and all related forms, including cost of e-filing or mailing
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column computer="6" tablet="12">
              <List verticalAlign="middle">
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Header>Tax Exempt Federal Return Preparation</List.Header>
                    <List.List>
                      <List.Item>
                        <List.Content>
                          <List.Description>
                            Form 990’s and all related forms, including cost of e-filing or mailing
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Header>Sales Tax Return Preparation</List.Header>
                    <List.List>
                      <List.Item>
                        <List.Content>
                          <List.Description>Per state, per filing</List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Header>Payroll Federal & State Annual Return Preparation</List.Header>
                    <List.List>
                      <List.Item>
                        <List.Content>
                          <List.Description>W2/W3 Filings for Up to 5 Employees</List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Header>Payroll Quarterly Return Preparation</List.Header>
                    <List.List>
                      <List.Item>
                        <List.Content>
                          <List.Description>
                            Quarterly 941 and Applicable State Filings
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="checkmark" />
                  <List.Content>
                    <List.Header>Annual Federal 1099 Filing Preparation</List.Header>
                    <List.List>
                      <List.Item>
                        <List.Content>
                          <List.Description>Filings for Up to 5 Contractors</List.Description>
                        </List.Content>
                      </List.Item>
                    </List.List>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ margin: "40px 0px" }}>
            <Grid.Column computer="5" tablet="12">
              <Item.Group className="beforeHand">
                <Item>
                  <Item.Content>
                    <Item.Header>Found what you're looking for?</Item.Header>
                    <Item.Description>Contact us today!</Item.Description>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Grid.Column>
            <Grid.Column computer="3" tablet="12">
              <Button>Click Here</Button>
            </Grid.Column>
            <Grid.Column computer="4" tablet="12">
              Image here
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
