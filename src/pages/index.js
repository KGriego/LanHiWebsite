import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import HomePage from "../components/HomePage";

const IndexPage = () => {
  console.log(
    "Find me on GitHub. @Midlu Kevin Griego or at my email: Kev.Gri32@gmail.com"
  );
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <HomePage />
    </Layout>
  );
};
export default IndexPage;
