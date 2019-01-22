import React, { Component } from "react";
// import axios from "axios";
import { Button, Form, Message, TextArea, Grid, Header, Item, List } from "semantic-ui-react";
import { SendForm } from "./ContactFormHelper";

class ContactForm extends Component {
  state = {
    accountNeeds: "",
    concernsOrQuestions: "",
    email: "",
    monthlyTransactions: "",
    name: "",
    typeOfBusniess: "",
    error: false,
    errorForEmail: false,
    errorForMessage: false,
    errorForName: false,
    sent: false
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  sendEmail = e => {
    e.preventDefault();
    const { state } = this;
    //don't forget to add phonenumber back in here
    const {
      accountingNeeds,
      concernsOrQuestions,
      email,
      monthlyTransactions,
      name,
      typeOfBusniess,
      error
    } = this.state;
    const result = SendForm(state);
    this.setState({ ...result });
    if (error === "") return false;
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
  };
  render() {
    const {
      accountNeeds,
      concernsOrQuestions,
      email,
      monthlyTransactions,
      name,
      typeOfBusniess,
      error,
      errorForEmail,
      errorForMessage,
      errorForName,
      sent
    } = this.state;
    return (
      <div style={{ backgroundColor: "#F7F7F7" }} className="ContactPage">
        <Grid centered>
          <Header textAlign="center" style={{ padding: "25px 0px 0px" }}>
            Contact Info
          </Header>
          <Grid.Row>
            <Grid.Column computer="12" tablet="12">
              <Item.Group>
                <Item>
                  <Item.Content>
                    <Item.Description>
                      We know that the accounting needs for every business are unique. Use our form
                      to tell us more about your needs and concerns, and we can help explore your
                      options.
                    </Item.Description>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer="6" tablet="5" mobile="10" className="someMarginBottom">
              <Header as="h3">Contact Us</Header>
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
            <Grid.Column computer="6" tablet="5" mobile="10">
              <Header as="h3">Regular Hours</Header>
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
              <Header as="h3">Tax Season Hours</Header>
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
          <Header as="h3">Contact Form</Header>
          <Grid.Row>
            <Item>
              <Item.Content>
                <Item.Description>Fields marked with an * are required</Item.Description>
              </Item.Content>
            </Item>
          </Grid.Row>
          <Grid.Row computer="10">
            <Form success={sent} size="big" style={{ width: "80%" }} error={error} netlify={""}>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Name*"
                  placeholder="John Doe"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  error={errorForName}
                />
                <Form.Input
                  fluid
                  label="Email*"
                  type="email"
                  placeholder="JohnDoe@example.com"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  error={errorForEmail}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  label="Type Of Busniess*"
                  name="typeOfBusniess"
                  value={typeOfBusniess}
                  onChange={this.handleChange}
                />
                <Form.Input
                  label="Average Monthly Transactions"
                  placeholder="Number of Monthly Transactions"
                  value={monthlyTransactions}
                  name="monthlyTransactions"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Field
                control={TextArea}
                label="Accounting Needs*"
                name="accountNeeds"
                placeholder="Tell us more about your accounting needs"
                value={accountNeeds}
                onChange={this.handleChange}
                error={errorForMessage}
              />
              <Form.Field
                control={TextArea}
                label="Questions/Concerns For Us"
                placeholder="Tell us any other questions, concerns, or special needs you may have."
                name="concernsOrQuestions"
                value={concernsOrQuestions}
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
              <div data-netlify-recaptcha="true" />
              <Button style={{ margin: 20 }} type="submit">
                Submit
              </Button>
            </Form>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default ContactForm;
