import React, { Component } from "react";
import { Grid, Header, List, Item, Divider } from "semantic-ui-react";
import PDF_LIST from "../PDF";
import "./Resources.css";

export default class ResourcesLayout extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#F7F7F7" }} className={"ResourcesPage"}>
        <Grid centered>
          <Grid.Row>
            <Grid.Column mobile={"14"}>
              <Divider horizontal>
                <Header
                  textAlign={"center"}
                  style={{ fontSize: "2.25em", fontWeight: 400 }}
                >
                  Resources
                </Header>
              </Divider>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer={"10"}>
              <Header textAlign={"center"} as={"h3"}>
                External Links
              </Header>
              <List>
                <List.Item>
                  <List.Icon name="external" />
                  <List.Content>
                    <List.Description>
                      <Item>
                        <Item.Content>
                          <Item.Description>
                            <Item.Header href="https://www.google.com/docs">
                              GOOGLE DOCS
                            </Item.Header>
                            A free Web-based application in which documents and
                            spreadsheets can be created, edited and securely
                            stored online.
                          </Item.Description>
                        </Item.Content>
                      </Item>
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="external" />
                  <List.Content>
                    <List.Description>
                      <Item>
                        <Item.Content>
                          <Item.Description>
                            <Item.Header as="a" href="https://www.dropbox.com/">
                              DROP BOX
                            </Item.Header>
                            Free cloud based storage.
                          </Item.Description>
                        </Item.Content>
                      </Item>
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="external" />
                  <List.Content>
                    <List.Description>
                      <Item>
                        <Item.Content>
                          <Item.Description>
                            <Item.Header as="a" href="https://www.irs.gov/">
                              IRS
                            </Item.Header>
                            IRS website where you can search for Federal tax
                            forms and information.
                          </Item.Description>
                        </Item.Content>
                      </Item>
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="external" />
                  <List.Content>
                    <List.Description>
                      <Item>
                        <Item.Content>
                          <Item.Description>
                            <Item.Header
                              as="a"
                              href="https://www.irs.gov/refunds"
                            >
                              WHERE'S MY REFUND
                            </Item.Header>
                            Determine the status of your federal tax refund.
                          </Item.Description>
                        </Item.Content>
                      </Item>
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="external" />
                  <List.Content>
                    <List.Description>
                      <Item>
                        <Item.Content>
                          <Item.Description>
                            <Item.Header
                              as="a"
                              href="https://www.sba.gov/learning-center"
                            >
                              SMALL BUSINESS ADMINISTRATION
                            </Item.Header>
                            An excellent organization that offers FREE or low
                            priced information and classes.
                          </Item.Description>
                        </Item.Content>
                      </Item>
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="10">
              <Header textAlign="center" as="h3">
                Documents And Forms
              </Header>
              <Item>
                <Item.Content>
                  <Item.Description>
                    Here you will find Documents and Forms to assist you in
                    preparing for your tax appointment. All documents are for
                    tax year 2018 with 2019 due dates but can be utilized in
                    preparing for earlier years.
                  </Item.Description>
                </Item.Content>
              </Item>
              <PDF_LIST />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
