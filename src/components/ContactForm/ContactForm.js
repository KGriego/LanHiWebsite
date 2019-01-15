import React, { Component } from "react";
// import axios from "axios";
import { Button, Form, Message, TextArea, Grid, Header, Item, List } from "semantic-ui-react";

class ContactForm extends Component {
  state = {
    accountingNeeds: "",
    concernsOrQuestions: "",
    name: "",
    email: "",
    typeOfBusniess: "",
    numberOfMonthlyTransactions: "",
    error: false,
    errorForEmail: false,
    errorForMessage: false,
    errorForName: false,
    sent: false
  };
  sendEmail = e => {
    e.preventDefault();
    //don't forget to add phonenumber back in here
    const {
      accountingNeeds,
      concernsOrQuestions,
      email,
      name,
      numberOfMonthlyTransactions,
      typeOfBusniess
    } = this.state;
    if (name === "") {
      this.setState({
        errorForName: true,
        error: true
      });
      return false;
    } else if (email === "") {
      this.setState({
        errorForEmail: true,
        error: true
      });
      return false;
    } else if (
      !(accountingNeeds || concernsOrQuestions || numberOfMonthlyTransactions || typeOfBusniess)
    ) {
      return false;
    } else {
      return false;
      // axios
      //   .post("/contact/sendEmail", {
      //     name,
      //     email,
      //     message,
      //     topic,
      //     phoneNumber
      //   })
      //   .then(res => {
      //     if (res.status === 202) {
      //       this.setState({
      //         errorForName: false,
      //         errorForEmail: false,
      //         errorForMessage: false,
      //         error: false,
      //         sent: true,
      //         name: "",
      //         email: "",
      //         message: "",
      //         phoneNumber: "",
      //         topic: ""
      //       });
      //     }
      //   })
      //   .catch(err => {
      //     this.setState({ error: true });
      //     console.log("err sending mail", err);
      //   });
    }
  };
  render() {
    const {
      accountingNeeds,
      concernsOrQuestions,
      email,
      name,
      numberOfMonthlyTransactions,
      typeOfBusniess,
      error,
      errorForEmail,
      errorForMessage,
      errorForName,
      sent
    } = this.state;
    return (
      <Grid centered>
        <Header textAlign="center">Contact Info</Header>
        <Grid.Row>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Description>
                  We know that the accounting needs for every business are unique. Use our form to
                  tell us more about your needs and concerns, and we can help explore your options.
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column computer="5" tablet="10">
            <Header>Contact Us</Header>
            <List>
              <List.Item>
                <List.Header>Email</List.Header>
                office@lanhiassociates.com
              </List.Item>
              <List.Item>
                <List.Header>Phone</List.Header>
                (360)-420-3387
              </List.Item>
              <List.Item>
                <List.Header>Fax</List.Header>
                (360)-335-6869
              </List.Item>
              <List.Item>
                <List.Header>Address</List.Header>
                608 S. 1st Street, Suite 209, Mount Vernon WA 98273
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column computer="5" tablet="10">
            <Header>Regular Hours</Header>
            <List bulleted>
              <List.Item>
                <List.Content>
                  <List.Description>Mon-Thurs: 9 AM - 5 PM</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Description>Friday: 9 AM - 12 PM</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Description>Saturday: Appointment Only</List.Description>
                </List.Content>
              </List.Item>
            </List>
            <Header>Tax Season Hours</Header>
            <List bulleted>
              <List.Item>
                <List.Content>
                  <List.Description>Mon-Fri: 9 AM - 9 PM</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Description>Sat-Sun: 10 AM - 7 PM</List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Header>Contact Form</Header>
        </Grid.Row>
        <Grid.Row>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Description>Fields marked with an * are required</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Row>
        <Grid.Row computer="14">
          <Form
            success={sent}
            size="big"
            onSubmit={this.sendEmail}
            style={{ width: "80%" }}
            error={error}>
            <Form.Group widths="equal">
              <Form.Input
                label="Name*"
                placeholder="John Doe"
                type="text"
                name="name"
                value={name}
                fluid
                onChange={this.handleChange}
                error={errorForName}
              />
              <Form.Input
                label="Email*"
                type="email"
                placeholder="JohnDoe@example.com"
                name="email"
                value={email}
                fluid
                onChange={this.handleChange}
                error={errorForEmail}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                label="Type Of Busniess*"
                value={typeOfBusniess}
                name="phoneNumber"
                onChange={this.handleChange}
              />
              <Form.Input
                label="Average Monthly Transactions"
                placeholder="Number of Monthly Transactions"
                value={numberOfMonthlyTransactions}
                name="phoneNumber"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Field
              control={TextArea}
              label="Accounting Needs*"
              name="accountNeeds"
              value={accountingNeeds}
              placeholder="Tell us more about your accounting needs"
              onChange={this.handleChange}
              error={errorForMessage}
            />
            <Form.Field
              control={TextArea}
              label="Questions/Concerns For Us"
              name="message"
              value={concernsOrQuestions}
              placeholder="Tell us any other questions, concerns, or special needs you may have."
              onChange={this.handleChange}
              error={errorForMessage}
            />
            <Message
              error
              header="Please Check The Form"
              content="Please make sure the required fields are filled"
            />
            <Message
              success
              header="Email Sent"
              content="I will get back to you as soon as possible"
            />
            <Button style={{ margin: 20 }} type="submit">
              Submit
            </Button>
          </Form>
        </Grid.Row>
      </Grid>
    );
  }
}
export default ContactForm;
