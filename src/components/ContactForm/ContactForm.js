import React, { Component } from "react";
import { Button, Form, Message, TextArea, Grid, Header, Item, List } from "semantic-ui-react";

class ContactForm extends Component {
  state = {
    loading: false,
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    topic: "",
    error: false,
    errorForEmail: false,
    errorForMessage: false,
    errorForName: false,
    sent: false
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  encode = data =>
    Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  handleSubmit = e => {
    e.preventDefault();
    const { state } = this;
    const { name, email, message, topic, phoneNumber } = this.state;

    this.setState({ loading: true });

    const result = SendForm(state);

    this.setState({ ...result });

    if (state.error) {
      this.setState({ loading: false });
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact-form", name, email, message, topic, phoneNumber })
    })
      .then(res => {
        if (res.status === 200 || res.status === 202) {
          this.setState({
            errorForName: false,
            errorForEmail: false,
            errorForMessage: false,
            error: false,
            sent: true,
            loading: false,
            name: "",
            email: "",
            message: "",
            phoneNumber: "",
            topic: ""
          });
        }
      })
      .catch(err => {
        this.setState({ error: true, loading: false });
        console.log("err sending mail", err);
      });
  };
  // state = {
  //   accountNeeds: "",
  //   concernsOrQuestions: "",
  //   email: "",
  //   monthlyTransactions: "",
  //   name: "",
  //   typeOfBusniess: "",
  //   error: false,
  //   errorForEmail: false,
  //   errorForMessage: false,
  //   errorForName: false,
  //   sent: false
  // };
  // encode = data =>
  //   Object.keys(data)
  //     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //     .join("&");

  // handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });
  // handleSubmit = async e => {
  //   e.preventDefault();
  //   const {
  //     accountNeeds,
  //     concernsOrQuestions,
  //     email,
  //     monthlyTransactions,
  //     name,
  //     typeOfBusniess
  //   } = this.state;
  //   debugger;
  //   const submission = await fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: this.encode({
  //       "form-name": "TerazaGroupBusinessContact",
  //       name,
  //       accountNeeds,
  //       concernsOrQuestions,
  //       email,
  //       monthlyTransactions,
  //       typeOfBusniess
  //     })
  //   });
  //   console.log(submission);
  //   debugger;

  //   //   if (res.status === 404) {
  //   //     this.setState({ error: true });
  //   //   } else {
  //   //     this.setState({ sent: true });
  //   //   }
  //   // })
  // };
  render() {
    // const {
    //   accountNeeds,
    //   concernsOrQuestions,
    //   email,
    //   monthlyTransactions,
    //   name,
    //   typeOfBusniess,
    //   error,
    //   errorForEmail,
    //   errorForMessage,
    //   errorForName,
    //   sent
    // } = this.state;
    const {
      name,
      errorForName,
      email,
      errorForEmail,
      phoneNumber,
      message,
      errorForMessage,
      sent,
      error,
      topic,
      loading
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
                  office@terazagroup.com
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
            {" "}
            <Form
              loading={loading}
              style={{ width: "80%" }}
              size="big"
              method={"POST"}
              onSubmit={this.handleSubmit}
              success={sent}
              error={error}
              name={"contact-form"}
              data-netlify={true}>
              <Grid.Row computer="14">
                <Form.Group widths="equal">
                  <input type="hidden" name="contact-form" value="hidden" />
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
                    country="US"
                    label="Phone Number"
                    placeholder="(999)-999-9999"
                    value={phoneNumber}
                    name="phoneNumber"
                    onChange={this.handleChange}
                  />
                  <Form.Select
                    label="Subject"
                    name="topic"
                    value={topic}
                    options={options}
                    placeholder="Subject"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Field
                  control={TextArea}
                  label="More Info*"
                  name="message"
                  value={message}
                  placeholder="Let us know any questions you have..."
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
              </Grid.Row>
            </Form>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default ContactForm;

// <Form
// size="big"
// style={{ width: "80%" }}
// error={error}
// success={sent}
// method={"POST"}
// onSubmit={this.handleSubmit}
// name="TerazaGroupBusinessContact"
// data-netlify="true"
// data-netlify-recaptcha="true"
// data-netlify-honeypot="bot-field">
// <input type="hidden" name="form-name" value="TerazaGroupBusinessContact" />
// <Form.Group widths="equal">
//   <Form.Input
//     fluid
//     label="Name*"
//     placeholder="John Doe"
//     type="text"
//     name="name"
//     value={name}
//     onChange={this.handleChange}
//     error={errorForName}
//   />
//   <Form.Input
//     fluid
//     label="Email*"
//     type="email"
//     placeholder="JohnDoe@email.com"
//     name="email"
//     value={email}
//     onChange={this.handleChange}
//     error={errorForEmail}
//   />
// </Form.Group>
// <Form.Group widths="equal">
//   <Form.Input
//     type="text"
//     label="Type Of Busniess*"
//     name="typeOfBusniess"
//     value={typeOfBusniess}
//     onChange={this.handleChange}
//   />
//   <Form.Input
//     type="text"
//     label="Average Monthly Transactions"
//     placeholder="Number of Monthly Transactions"
//     name="monthlyTransactions"
//     value={monthlyTransactions}
//     onChange={this.handleChange}
//   />
// </Form.Group>
// <Form.Field
//   control={TextArea}
//   type="text"
//   label="Accounting Needs*"
//   placeholder="Tell us more about your accounting needs"
//   name="accountNeeds"
//   value={accountNeeds}
//   onChange={this.handleChange}
//   error={errorForMessage}
// />
// <Form.Field
//   control={TextArea}
//   type="text"
//   label="Questions/Concerns For Us"
//   placeholder="Tell us any other questions, concerns, or special needs you may have."
//   name="concernsOrQuestions"
//   value={concernsOrQuestions}
//   onChange={this.handleChange}
//   error={errorForMessage}
// />
// <Message
//   error
//   header="Please Check The Form"
//   content="Please make sure the required fields are filled"
// />
// <Message
//   success
//   header="Email Sent"
//   content="I will get back to you as soon as possible"
// />
// <div data-netlify-recaptcha="true" />
// <Button style={{ margin: 20 }} type="submit">
//   Submit
// </Button>
// </Form>
