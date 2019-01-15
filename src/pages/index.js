import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import HomePage from "../components/HomePage";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomePage />
  </Layout>
);

export default IndexPage;
