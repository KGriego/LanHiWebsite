import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import ContactForm from "../components/ContactForm";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Me" />
    <ContactForm />
  </Layout>
);

export default ContactPage;
