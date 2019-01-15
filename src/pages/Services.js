import React from "react";
import SEO from "../components/Seo";
import Layout from "../components/Layout";
import ServicesLayout from "../components/ServicesLayout";

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" keywords={[`services`, `law`]} />
    <ServicesLayout />
  </Layout>
);

export default ServicesPage;
